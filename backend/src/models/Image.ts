import { model, Schema, Model, Document, Types } from 'mongoose';

interface IImage extends Document {
  userId: Types.ObjectId,
  image: Types.ObjectId,
  filename: String
}

const ImageSchema: Schema = new Schema({
  userId: {type: Schema.Types.ObjectId, required: true},
  image: {type: Schema.Types.ObjectId, required: true},
  filename: {type: String, required: false}
})

export const Image: Model<IImage> = model("Image", ImageSchema)