import { Document, Schema, model } from 'mongoose'

export type PostFields = {
  readonly image: string
  readonly title: string
  readonly content: string
  readonly user: typeof Schema.Types.ObjectId
};

export type PostDocument = Document & PostFields

const schema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { ref: 'Project', type: Schema.Types.ObjectId },
}, { timestamps: true })

function transform(): Record<string, unknown> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, __v, ...obj } = this.toObject()
  return { id: _id, ...obj }
}

schema.method('transform', transform)

export const Post = model<PostDocument>('Post', schema)
