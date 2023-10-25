import express, { Request, Response, NextFunction } from 'express';
import { Post } from './models/post';
import AppError from './service/app_error';

export const postRouter = express.Router();

postRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      if (!data?.content) {
        // 將以下改為 appError 自訂錯誤回饋
        // res.status(400).json({
        //   status: 'false',
        //   message: 'content 欄位為必填',
        // });
        // return;
        return next(new AppError(400, 'content 欄位為必填'));
      }
      const newPost = await Post.create({
        user: data.user,
        content: data.content,
        tags: data.tags,
        type: data.type,
      });
      res.status(200).json({
        status: 'success',
        data: newPost,
      });
    } catch (error) {
      next(error);
    }
  }
);
