import mongoose from 'mongoose';
import * as crypto from "crypto";
import * as path from "path";
import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer"

export function getUploadImageStream() {
  let gfs;
  mongoose.connection.on("connected", () => {
    console.log("Created stream to upload image")
    var db = mongoose.connections[0].db;
    gfs = new mongoose.mongo.GridFSBucket(db, {
      bucketName: "uploads"
    });
  })
  console.log(gfs)
  return gfs;
}

export function getGridFsInstance() {
  /*
    GridFs Configuration
  */
  // create storage engine
  const storage = new GridFsStorage({
      url: process.env.MONGO_URI,
      file: (req: any, file: any) => {
          return new Promise((resolve, reject) => {
              crypto.randomBytes(16, (err, buf) => {
                  if (err) {
                      return reject(err);
                  }
                  const filename = buf.toString('hex') + "_" + Date.now() + path.extname(file.originalname);
                  const fileInfo = {
                      filename: filename,
                      bucketName: 'uploads'
                  };
                  resolve(fileInfo);
              });
          });
      }
  });

  const upload = multer({ storage: storage });
  return upload;
}

