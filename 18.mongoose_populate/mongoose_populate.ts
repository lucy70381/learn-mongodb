import mongoose from 'mongoose';
import Story from './models/story';
import Person from './models/person';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const init = async () => {
  // 建立一個 Person
  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50,
  });
  await author.save();

  // 建立一個 Story 並關聯 Person
  const story1 = new Story({
    title: 'Casino Royale',
    author: author._id, // assign the _id from the person
  });
  await story1.save();
};

const pupulate = async () => {
  const story = await Story.findOne({ title: 'Casino Royale' }).populate({
    path: 'author', // 關聯的欄位
    select: 'name age', // 只顯示 name 和 age 欄位
    model: Person, // 關聯的 model
  });
  console.log(story);
};

// init();
pupulate();
