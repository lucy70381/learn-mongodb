import mongoose from 'mongoose';
import Post from './models/post';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const sort_limit = async () => {
  // name: 'asc' 代表 name 欄位的值要按照字母順序排序
  // likes: -1 代表 likes 欄位的值要按照降冪排序
  // limit(10) 代表只取 10 筆資料
  const posts = await Post.find().sort({ name: 'asc', likes: -1 }).limit(10);
  console.log(posts);

  // 也可以用字串來指定排序方式 (欄位名稱前加上 - 代表降序排列）
  const posts2 = await Post.find().sort('name -likes').limit(10);
  console.log(posts2);
};

// init();
sort_limit();
