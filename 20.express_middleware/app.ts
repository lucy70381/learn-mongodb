import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/learn-mongo');

const app = express();
const port = process.env.PORT || 3000;

// 在接收 request 時都會經過此 middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware1');
  next();
});

// 可以設定多個 middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware2');
  next();
});

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  console.log('Check login');
  const isLogin = true;
  if (isLogin) {
    next(); // 呼叫 next()，才會繼續往下執行
  } else {
    res.send('Please login');
  }
};

// 只想在特定 request 時經過 middleware 把關
app.get('/', checkLogin, (req: Request, res: Response) => {
  res.send('Login');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
