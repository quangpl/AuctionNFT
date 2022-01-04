import { Router } from "express";
import * as controller from "../controllers/index";
import { requireJwtMiddleware } from "../middlewares/authentication";
import { app } from "../app";
import { getGridFsInstance } from "../helpers/uploadImageHelpers"
export const index = Router();


index.get("/", controller.index);
index.get("/users", controller.getAllUsers)
index.post("/user", controller.createUser)
index.get("/user/:id", controller.getUserById)
index.patch("/user/:id", controller.updateUserById)
index.delete("/user/:id", controller.deleteUserById)
index.post("/login", controller.login)
index.post("/upload", [requireJwtMiddleware, getGridFsInstance().single("file")], controller.uploadImage)
index.get("/get-image", [requireJwtMiddleware], controller.getImage)