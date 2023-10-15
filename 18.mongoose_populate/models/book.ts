import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    author: { type: mongoose.Types.ObjectId, ref: 'Author' },
    title: String,
  },
  { versionKey: false }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
