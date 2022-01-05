import { model, Schema, Model, Document, Types } from "mongoose";

interface IItem extends Document {
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    owner: string;
    seller: string;
    tokenId: number;

    isForSale: boolean;
    saleId: number;
    isSold: boolean;
    status: number; //0 created 1 sale 3 owned
}

const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Schema.Types.Number, required: true },
    imageUrl: { type: String, required: false },
    owner: { type: Schema.Types.ObjectId },
    description: { type: String, required: false },
    seller: { type: Schema.Types.String },
    tokenId: { type: Schema.Types.Number },

    isForSale: { type: Schema.Types.Boolean },
    saleId: { type: Schema.Types.Number },
    isSold: { type: Schema.Types.Boolean },
    status: { type: Schema.Types.Number, required: false, default: 0 },
});

export const ItemModel = model("Item", ItemSchema);
