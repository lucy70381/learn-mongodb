import express, {
  NextFunction,
  Request,
  Response,
  json,
  urlencoded,
} from 'express';

import bcypt from 'bcrypt';
import mongoose from 'mongoose';

import User from './models/user';
import handleErrorAsync from './service/handle_error_async';
import AppError from './service/app_error';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.post(
  '/user/sign_up',
  handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, confirmPassword } = req.body;

    const user = await User.create({
      email,
      password: await bcypt.hash(password, 12),
    });

    res.status(200).json({ status: 'success', data: user });
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
