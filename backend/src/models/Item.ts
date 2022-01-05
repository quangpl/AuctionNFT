import { model, Schema, Model, Document, Types } from "mongoose";

interface IItem extends Document {
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    owner: string;
    seller: string;
}

const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Schema.Types.Number, required: true },
    imageUrl: { type: String, required: false },
    owner: { type: Schema.Types.ObjectId },
    description: { type: String, required: false },
    seller: { type: Schema.Types.ObjectId },
});

export const ItemModel = model("Item", ItemSchema);
