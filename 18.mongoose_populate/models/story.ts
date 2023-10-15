import mongoose from 'mongoose';
const { Schema } = mongoose;

const storySchema = new Schema({
  author: { type: Schema.ObjectId, ref: 'Person' }, // 關聯至 Person 的 id 欄位
  title: String,
  fans: [{ type: Schema.ObjectId, ref: 'Person' }], // 關聯至 Person 的 id 欄位
});

const Story = mongoose.model('Story', storySchema);
export default Story;
