import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }], // 關聯至 Story 的 id 欄位
  },
);

const Person = mongoose.model('Person', personSchema);
export default Person;
