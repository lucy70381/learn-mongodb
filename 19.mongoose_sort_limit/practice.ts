import express, { Express, Request, Response } from 'express';
import Post from './models/post';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const app: Express = express();
const port = 3000;

app.get('/posts', async (req: Request, res: Response) => {
  const { sort, limit } = req.query;

  const timeSort = (sort === 'asc' ? '' : '-') + 'createdAt';
  const posts = await Post.find()
    .select({
      _id: 1,
      name: 1,
      createdAt: 1,
      likes: 1,
    })
    .sort(timeSort)
    .limit(Number(limit));
  res.status(200).json({ status: 'success', data: posts });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
