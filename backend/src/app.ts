import express from "express";
import logger from "morgan";
import * as path from "path";
import mongoose from 'mongoose';

require('dotenv').config()
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
// Create Express server
export const app = express();

// Express configuration
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));
mongoose.connect(process.env.MONGO_URI).then(() => {console.log("Connect to database")})
app.use(express.json())
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
