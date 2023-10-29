import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from 'express';

import bcypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import validator from 'validator';

import User from './models/user';
import handleErrorAsync from './service/handle_error_async';
import AppError from './service/app_error';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.post(
  '/user/sign_up',
  handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, confirmPassword } = req.body;

    // // 加入驗證，確保使用者註冊資料符合格式
    if (!email || !password || !confirmPassword) {
      next(
        new AppError(400, 'Email, password and confirm password are required')
      );
    }

    if (password !== confirmPassword) {
      next(new AppError(400, 'Password and confirm password are not match'));
    }

    if (!validator.isEmail(email)) {
      next(new AppError(400, 'Email is invalid'));
    }

    const user = await User.create({
      email,
      password: await bcypt.hash(password, 12),
    });

    res.status(200).json({
      status: 'success',
      data: jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
        expiresIn: process.env.JWT_EXPIRES_DAY,
      }),
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
