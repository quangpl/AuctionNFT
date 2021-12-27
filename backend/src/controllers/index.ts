import { Request, Response } from "express";
import {User} from "../models/User";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
  res.render("index", { title: "Express" });
};


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const users: any = await User.find()
  res.render("test", {data: users})
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const user: any = await User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  res.render("test", {data: user})
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: any = await User.findById(req.params.id)
    res.render("test", {data: user})
  } catch {
    res.render("error", {title: "Error", message: "User not found"})
  }
};

export const updateUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: any = await User.findById(req.params.id)

    if(req.body.username) user.username = req.body.username
    if(req.body.password) user.password = req.body.password
    if(req.body.email) user.email = req.body.email

    res.render("test", {data: user})
  } catch {
    res.render("error", {title: "Error", message: "User not found"})
  }
};

export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.render("test", {data: "Delete OK"})
  } catch {
    res.render("error", {title: "Error", message: "User not found"})
  }
};