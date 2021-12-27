import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  username: String,
  password: String,
  email: String,
}

const UserSchema: Schema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
})

export const User: Model<IUser> = model('User', UserSchema)