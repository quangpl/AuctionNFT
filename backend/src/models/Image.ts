import { model, Schema, Model, Document, Types } from 'mongoose';

const GFS = model("GFS", new Schema({}, { strict: false }), "uploads.files")

interface IImage extends Document {
  userId: Types.ObjectId,
  image: Types.ObjectId,
  url: String
}

const ImageSchema: Schema = new Schema({
  userId: {type: Schema.Types.ObjectId, required: true},
  image: {type: Schema.Types.ObjectId, required: true, ref: "GFS"},
  url: {type: String, required: false}
})

export const Image: Model<IImage> = model("Image", ImageSchema)