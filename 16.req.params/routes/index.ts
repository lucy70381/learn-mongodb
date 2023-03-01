import express, { Request, Response, NextFunction } from 'express';

export const indexRouter = express.Router();

indexRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello World' });
});
