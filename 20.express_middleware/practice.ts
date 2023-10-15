import express, { Request, Response, NextFunction } from 'express';
import mongoose, { Error } from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/learn-mongo');

const app = express();
const port = process.env.PORT || 3000;

// 嘗試使用 app.use() 設計一個處理錯誤路由以及一個伺服器程式錯誤的 Middleware，
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ status: 'error', message: '無此頁面資訊' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ status: 'error', message: '系統錯誤，請恰系統管理員' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
