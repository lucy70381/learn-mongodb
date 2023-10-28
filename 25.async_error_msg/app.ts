import express, { Request, Response, NextFunction } from 'express';
import handleErrorAsync from './service/handle_error_async';
import { Post } from './models/post';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const app = express();

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const posts = await Post.findById(id);
  res.status(200).json({
    status: 'success',
    data: posts,
  });
};

app.get('/:id', handleErrorAsync(getPosts));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ status: 'fail', message: err.message });
  } else {
    res.status(400).json({ status: 'fail', message: 'Unexpected error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
