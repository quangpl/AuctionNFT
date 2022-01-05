import path from "path";
import fs from "fs";
import { Request, Response } from "express";
import { ItemModel } from "../models/Item";
import { User } from "../models/User";

// const dbFile = path.resolve(__dirname, "db.json");
// let db;
// if (!fs.existsSync(dbFile)) {
//     db = fs.writeFileSync(dbFile, JSON.stringify([]));
// }
// db = fs.readFileSync(dbFile, "utf8");

// const tokens = JSON.parse(db);

export const getTokenById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { tokenID } = req.params;
    const token = await ItemModel.findById(tokenID);
    res.status(200).json(token);
};

export const getAllTokens = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const tokens = await ItemModel.find({});
    res.status(200).json(tokens);
};

export const createToken = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { filename } = req.file;
        const { tokenId, name, description, price, seller } = req.body;
        // console.log("body");
        // const tokenId = uuidv4();

        // tokens[tokenId] = {
        //     name,
        //     description,
        //     image: `${req.protocol}://${req.get("host")}/images/${filename}`,
        // };
        let sellerObj = await User.findOne({
            address: seller,
        });
        if (!sellerObj) {
            sellerObj = new User({
                address: seller,
            });
            sellerObj = await sellerObj.save();
            console.log(seller);
        }
        const item = new ItemModel({
            name,
            price,
            imageUrl: `${req.protocol}://${req.get("host")}/images/${filename}`,
            description,
            owner: undefined,
            seller: sellerObj.id,
        });
        await item.save();
        // fs.writeFileSync(dbFile, JSON.stringify(tokens));

        const fullUrl = `${req.protocol}://${req.get("host")}${
            req.originalUrl
        }/${tokenId}`;
        console.log(fullUrl);
        res.status(200).json({ url: fullUrl });
        return;
    } catch (e) {
        console.log(e);
    }
};
