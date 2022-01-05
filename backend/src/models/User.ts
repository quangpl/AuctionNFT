import { model, Schema, Model, Document } from "mongoose";

interface IUser extends Document {
    address: string;
}

const UserSchema: Schema = new Schema({
    address: { type: String, required: false },
});

export const User: Model<IUser> = model("User", UserSchema);
