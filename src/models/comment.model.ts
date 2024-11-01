import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  name: string;
  email: string;
  movie_id: mongoose.Types.ObjectId;
  text: string;
  date: Date;
}

const CommentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  movie_id: { type: mongoose.Types.ObjectId, required: true, ref: 'Movie' },
  text: { type: String, required: true },
  date: { type: Date, required: true }
});

export const Comment = mongoose.model<IComment>('Comment', CommentSchema);