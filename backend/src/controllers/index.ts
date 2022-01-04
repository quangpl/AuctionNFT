import { Request, Response } from "express";
import {User} from "../models/User";
import { Image } from "../models/Image";
import { encodeSession } from "../helpers/jwtHelpers";
import { isEmpty } from "lodash";
import mongoose from "mongoose"

let gfs:any = undefined;

mongoose.connection.on("connected", () => {
  console.log("Created stream to upload image")
  var db = mongoose.connections[0].db;
  gfs = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "uploads"
  });
})


/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
  res.render("index", { title: "Express" });
};


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const users: any = await User.find()
  if(!isEmpty(users)) {
    res.status(200).json({
      data: users
    })
  } else {
    res.status(401).json({
      message: "User not found"
    })
  }
  // res.render("test", {data: users})
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const user: any = await User.create({
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    wallet: req.body.wallet
  })
  res.status(200).json({
    message: "User created",
    data: user
  })
  // res.render("test", {data: user})
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: any = await User.findById(req.params.id)
    if(!isEmpty(user)) {
    // res.render("test", {data: user})
    res.status(200).json({
      message: "OK",
      data: user
    })
    } else {
      res.status(401).json({
        message: "User not found"
      })
    }
  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
};

export const updateUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: any = await User.findById(req.params.id)

    if(!isEmpty(user)) {
      if(req.body.address) user.address = req.body.address
      if(req.body.password) user.password = req.body.password
      if(req.body.username) user.username = req.body.username
      if(req.body.email) user.email = req.body.email
      if(req.body.address) user.address = req.body.address

      user.save();

      res.status(200).json({
        message: "User updated",
        data: user
      })
    } else {
      res.status(401).json({
        message: "User not found"
      })
    }
  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "Delete OK",
    })
  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: any = await User.findOne({email: req.body.email, password: req.body.password}).exec();
    if(!isEmpty(user)) {
      const session = encodeSession(process.env.JWT_SECRET_KEY, {
        email: user.email,
        id: user._id
      });

      res.status(201).json(session);
    } else {
      res.status(401).json({
        message: "Username or password is wrong"
      })
    }

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const uploadImage = async (req: any, res: Response): Promise<void> => {
  try {
    const user:any = await User.findById(req.body.userId)

    if(isEmpty(user)) {
      res.status(401).json({
        message: "User Not Found"
      })
      return
    }
    const imageUrl = (process.env.BASE_URL || "http://localhost:4000") + "/file/" + req.file.filename
    const image: any = await Image.create({
      userId: user._id,
      image: req.file.id,
      url: imageUrl
    })


    res.status(200).json({
      message: "Upload success",
      image: image
    })
  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const getImages = async (req: Request, res: Response): Promise<void> => {
  try {
    const user:any = await User.findById(req.params.userid)
    if(isEmpty(user)) {
      res.status(401).json({
        message: "User Not Found"
      })
      return
    }

    const images: any = await Image.find({ userId: user._id }).populate('image').exec()

    res.status(200).json({
      data: images
    })

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const renderImage = async (req: Request, res: Response): Promise<void> => {
  try {
    gfs.find({ filename: req.params.filename }).toArray((err : any, files: any) => {
      if (!files[0] || files.length === 0) {
          return res.status(200).json({
              message: 'No files available',
          });
      }

      if (files[0].contentType === 'image/jpeg' || files[0].contentType === 'image/png' || files[0].contentType === 'image/svg+xml') {
          // render image to browser
          gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      } else {
          res.status(404).json({
              err: 'Not an image',
          });
      }
  });
  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const getAllItems = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const createItem = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const getItemById = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const updateItemById = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}

export const deleteItemById = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch {
    res.status(500).json({
      message: "Something wrong"
    })
  }
}