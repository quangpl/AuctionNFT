import { model, Schema, Model, Document, Types } from 'mongoose';

interface IItem extends Document {
  name: String,
  price: Types.Decimal128,
  imageUrl: String,
  description: String,
  image: Types.ObjectId,
  user: Types.ObjectId
}

const ItemSchema: Schema = new Schema({
  name: {type: String, required: true},
  price: {type: Schema.Types.Decimal128, required: true},
  imageUrl: {type: String, required: false},
  user: {type: Schema.Types.ObjectId, required: true, ref: "User"},
  description: {type: String, required: false},
  image: {type: Schema.Types.ObjectId, required: false, ref: "Image"}
})

export const Item: Model<IItem> = model("Item", ItemSchema)