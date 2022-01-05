import path from "path";
import fs from "fs";
import { Request, Response } from "express";
import { ItemModel } from "../models/Item";
import { User } from "../models/User";
import { Types } from "mongoose";


export const getTokenById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { tokenID } = req.params;
    const token = await ItemModel.findById(tokenID);
    res.status(200).json(token);
};

export const updateItem = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { isForSale, saleId, isSold, _id } = req.body;

    const token = await ItemModel.findById(_id);
    const updatedToken = {
        ...token,
        ...{
            isForSale,
            saleId,
            isSold,
        },
    };
    await ItemModel.updateOne(
        {
            _id: new Types.ObjectId(_id),
        },
        updatedToken,
    );
    res.status(200);
};

export const getTokenByTokenId = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { tokenID } = req.params;
    const token = await ItemModel.findOne({
        tokenId: tokenID,
    });
    res.status(200).json(token);
};

export const getAllTokens = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const tokens = await ItemModel.find({});
    res.status(200).json(tokens);
};

export const updateStatus = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { _id, status } = req.body;
    await ItemModel.updateOne(
        {
            _id: new Types.ObjectId(_id),
        },
        {
            status,
        },
    );

    res.status(200);
};

export const getTokensByAddress = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { address } = req.params;
    const user = await User.findOne({
        address,
    });
    const items = await ItemModel.find({
        seller: address,
    });
    console.log(items);
    res.status(200).json(items);
};
export const createToken = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const { filename } = req.file;
        const { tokenId, name, description, price, seller } = req.body;
        console.log(seller);
     
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
        console.log(JSON.stringify(sellerObj));
        const item = new ItemModel({
            name,
            price,
            imageUrl: `${req.protocol}://${req.get("host")}/images/${filename}`,
            description,
            owner: undefined,
            seller:seller,
            tokenId,
        });
        await item.save();

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
