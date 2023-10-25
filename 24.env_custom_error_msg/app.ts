import express, { Request, Response, NextFunction } from 'express';
import AppError from './service/app_error';

const app = express();

const resErrorDev = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('Error: ', err);
    res.status(500).json({
      status: 'error',
      message: '系統錯誤，請恰系統管理員',
    });
  }
};

const resErrorProd = (err: AppError, res: Response) => {
  if (err.isAxiosError) {
    err.message = '連線錯誤';
    err.isOperational = true;
  } else if (err.name === 'ValidationError') {
    // mongoose 驗證錯誤
    err.isOperational = true;
  }
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(400, 'Bad request'));
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  console.log(process.env.NODE_ENV);

  if (process.env.NODE_ENV === 'development') {
    resErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    resErrorProd(err, res);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
