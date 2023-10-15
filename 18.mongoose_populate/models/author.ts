import mongoose from 'mongoose';

const { Schema } = mongoose;
const authorSchema = new Schema(
  {
    name: String,
    introduction: String,
  },
  { versionKey: false }
);

const Author = mongoose.model('Author', authorSchema);
export default Author;
