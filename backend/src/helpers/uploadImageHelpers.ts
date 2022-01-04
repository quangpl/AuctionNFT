import mongoose from 'mongoose';
import * as crypto from "crypto";
import * as path from "path";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer"

  export function getUploadImageStream() {
  const connect = mongoose.createConnection(process.env.MONGO_URI)
  let gfs;
  connect.once('open', () => {
      console.log("Created stream to upload image")
      gfs = new mongoose.mongo.GridFSBucket(connect.db, {
          bucketName: "uploads"
      });
  });
  return gfs;
}

export function getGridFsInstance() {
  /*
    GridFs Configuration
  */
  // const multer = require("multer");

  // create storage engine
  const storage = new GridFsStorage({
      url: process.env.MONGO_URI,
      file: (req: any, file: any) => {
          return new Promise((resolve, reject) => {
              crypto.randomBytes(16, (err, buf) => {
                  if (err) {
                      return reject(err);
                  }
                  const filename = buf.toString('hex') + path.extname(file.originalname);
                  const fileInfo = {
                      filename: filename,
                      bucketName: 'uploads'
                  };
                  resolve(fileInfo);
              });
          });
      }
  });

  const upload = multer({ storage });
  return upload;
}

