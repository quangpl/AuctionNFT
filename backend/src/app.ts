import express from "express";
import logger from "morgan";
import * as path from "path";
import mongoose from "mongoose";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import { createToken, getTokenById } from "./controllers/tokens";
import { upload } from "./upload";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/nft")
    .then(() => {
        console.log("Connect to database");
    });
app.use(express.json());
app.use('/images', express.static('imgs'));
app.get("/", (req, res) => {
    res.json({
        msg: "Hello World",
    });
});
app.get("/tokens/:tokenID", getTokenById);

app.post("/tokens", upload.single("img"), createToken);
app.use(errorNotFoundHandler);
app.use(errorHandler);
