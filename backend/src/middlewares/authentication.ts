import { Request, Response, NextFunction } from "express";
import * as sessionType from "../models/Token";
import * as jwt from "../helpers/jwtHelpers";

export function requireJwtMiddleware(request: Request, response: Response, next:NextFunction) {
  const unauthorized = (message: string) => response.status(401).json({
    ok: false,
    status: 401,
    message: message
  });

  const requestHeader = "X-JWT-Token";
  const responseHeader = "X-Renewed-JWT-Token";
  const header = request.header(requestHeader);

  if(!header) {
    unauthorized(`Required ${requestHeader} header not found.`);
    return;
  }

  const decodedSession: sessionType.DecodeResult = jwt.decodeSession(process.env.JWT_SECRET_KEY, header);

  if (decodedSession.type === "integrity-error" || decodedSession.type === "invalid-token") {
    unauthorized(`Failed to decode or validate authorization token. Reason: ${decodedSession.type}.`);
    return;
  }

  const expiration: sessionType.ExpirationStatus = jwt.checkExpiration(decodedSession.session);

  if (expiration === "expired") {
    unauthorized(`Authorization token has expired. Please create a new authorization token.`);
    return;
  }

  let session: sessionType.Session;

  if(expiration == "grace") {
    // Automatically renew the session and send it back with the response
    const {token, expires, issued} = jwt.encodeSession(process.env.JWT_SECRET_KEY, decodedSession.session);

    session = {
      ...decodedSession.session,
      expires: expires,
      issued: issued
    };

    response.setHeader(responseHeader, token);
  } else {
    session = decodedSession.session;
  }

  // Set the session on response.locals object for routes to access
  response.locals = {
    ...response.locals,
    session: session
  }

  next();
}