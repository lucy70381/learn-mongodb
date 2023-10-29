import { NextFunction } from 'express';

class AppError extends Error {
  status: string;
  statusCode: number;
  message: string;
  isOperational: boolean;

  constructor(httpStatus: number, message: string) {
    super(message);

    this.status = `${httpStatus}`.startsWith('4') ? 'fail' : 'error';
    this.statusCode = httpStatus;
    this.message = message;
    this.isOperational = true; // 用來判斷是否為預期錯誤，預期錯誤會回傳自訂的錯誤訊息
  }
}

export default AppError;
