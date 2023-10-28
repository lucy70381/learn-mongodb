import express, { Request, Response, NextFunction } from 'express';
import AppError from './service/app_error';

const app = express();

const resErrorDev = (err: AppError, res: Response) => {
  err.statusCode = 400;
  err.message = 'Unexpected end of JSON input';
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
    error: {
      expose: true,
      statusCode: err.statusCode,
      status: err.statusCode,
    },
    stack: err.stack,
  });
};

const resErrorProd = (err: AppError, res: Response) => {
  if (err.isAxiosError) {
    err.message = '連線錯誤';
    err.isOperational = true;
  } else if (err.name === 'ValidationError') {
    // mongoose 驗證錯誤
    err.isOperational = true;
  } else if (err.name === 'SyntaxError') {
    err.statusCode = 400;
    err.isOperational = true;
    err.message = '資料格式錯誤';
  }
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
  });
};

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(400, 'Bad request'));
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(404, 'Not found');
  next(error);
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
