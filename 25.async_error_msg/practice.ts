import express, { Request, Response, NextFunction } from 'express';
import handleErrorAsync from './service/handle_error_async';
import { Post } from './models/post';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post(
  '/',
  handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    const { name, content, tags, type } = req.body;

    const post = await Post.create({
      name,
    });
    res.status(200).json({
      status: 'success',
      data: post,
    });
  })
);

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
