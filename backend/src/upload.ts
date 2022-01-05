import multer from "multer";
import crypto from "crypto";

const storage = multer.diskStorage({
    destination: (_, _f, cb) => {
        return cb(null, "imgs/");
    },
    filename: (_req, file, cb) => {
        const fileExtension = file.originalname.split(".")[1];
        const newNameFile = crypto.randomBytes(16).toString("hex");
        return cb(null, `${newNameFile}.${fileExtension}`);
    },
});

export const upload = multer({ storage });
