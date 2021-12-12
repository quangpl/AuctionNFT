import { Router } from "express";
import * as controller from "../controllers/index";

export const index = Router();

index.get("/", controller.index);
index.get("/users", controller.getAllUsers)
index.post("/user", controller.createUser)
index.get("/user/:id", controller.getUserById)
index.patch("/user/:id", controller.updateUserById)
index.delete("/user/:id", controller.deleteUserById)
