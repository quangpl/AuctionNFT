import { Router } from "express";
import * as controller from "../controllers/index";
import { requireJwtMiddleware } from "../middlewares/authentication";
import { app } from "../app";
import { getGridFsInstance } from "../helpers/uploadImageHelpers";
const upload = getGridFsInstance();
export const index = Router();

index.get("/", controller.index);

/*
 *  CRUD User
 */
// index.get("/users", controller.getAllUsers);
// index.post("/user", controller.createUser);
index.get("/user/:id", controller.getUserById);
// index.patch("/user/:id", requireJwtMiddleware, controller.updateUserById);
// index.delete("/user/:id", requireJwtMiddleware, controller.deleteUserById);



// index.post(
//     "/upload",
//     requireJwtMiddleware,
//     upload.single("image"),
//     controller.uploadImage,
// );
// index.get("/get-images/:userid", requireJwtMiddleware, controller.getImages);
// index.get("/file/:filename", requireJwtMiddleware, controller.renderImage);

