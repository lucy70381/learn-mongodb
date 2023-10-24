import express, { Request, Response, NextFunction } from 'express';

import AppError from './service/app_error';

const app = express();
const port = process.env.PORT || 3000;

// Route
app.get('/product/:id', (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    // 假如 id 不存在，就會拋出錯誤
    next(new AppError(400, `Post with id ${id} not found`));
  } catch (err) {
    next(err);
  }
});

// 404 middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError(404, 'Not found'));
});

// Error handling middleware
// 錯誤處理的 middleware 相較一般 middleware 會多一個 err 引數
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  // 這裡的 err 是從 next(err) 傳入的
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  err.message = err.message || 'Something went wrong';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
