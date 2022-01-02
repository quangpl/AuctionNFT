import { Request, Response } from "express";
import {User} from "../models/User";
import { requireJwtMiddleware } from "../middlewares/authentication";
import { encodeSession } from "../helpers/jwtHelpers";
import { isEmpty } from "lodash";
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