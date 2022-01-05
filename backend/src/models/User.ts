import { model, Schema, Model, Document } from "mongoose";

interface IUser extends Document {
    address: string;
    password: string;
    email: string;
    wallet: string;
    username: string;
}

const UserSchema: Schema = new Schema({
    address: { type: String, required: false },
    password: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    wallet: { type: String, required: false },
});

export const User: Model<IUser> = model("User", UserSchema);
