import express, { Request, Response, NextFunction } from 'express';
import { Post } from '../models/post';

export const postRouter = express.Router();

postRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      /* 請在此填寫答案 */
      // 取得來自 request body 的資料
      const post = req.body;
      // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
      //                       -> 未填寫 content 欄位 -> 回傳失敗回應
      if (post.content) {
        const newPost = await Post.create(post);
        res.status(200).json({ status: 'success', data: newPost });
      }
      return res.status(400).json({
        status: 'fail',
        message: '欄位未填寫正確，或無此 todo ID',
      });
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: '欄位未填寫正確，或無此 todo ID',
      });
    }
  }
);
