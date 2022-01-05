import path from "path";
import fs from "fs";
import { Request, Response } from "express";

const dbFile = path.resolve(__dirname, "db.json");
let db;
if (!fs.existsSync(dbFile)) {
    db = fs.writeFileSync(dbFile, JSON.stringify([]));
}
db = fs.readFileSync(dbFile, "utf8");

const tokens = JSON.parse(db);

export const getTokenById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { tokenID } = req.params;
    res.status(200).json(tokens[tokenID]);
};

export const createToken = async (
    req: Request,
    res: Response,
): Promise<void> => {
   try {
    const { filename } = req.file;
    const { tokenId, name, description } = req.body;
    console.log("body");
    // const tokenId = uuidv4();

    tokens[tokenId] = {
        name,
        description,
        image: `${req.protocol}://${req.get("host")}/images/${filename}`,
    };

    fs.writeFileSync(dbFile, JSON.stringify(tokens));

    const fullUrl = `${req.protocol}://${req.get("host")}${
        req.originalUrl
    }/${tokenId}`;
    console.log(fullUrl);
    res.status(200).json({ message: fullUrl });
    return;
   }
   catch(e){
     console.log(e);
   }
};
