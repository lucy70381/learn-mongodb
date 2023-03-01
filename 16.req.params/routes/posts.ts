import express, { Request, Response, NextFunction } from 'express';
import { Post } from '../models/post';

export const postRouter = express.Router();

postRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (post) {
        res.status(200).json({ status: 'success', data: post });
      } else {
        res.status(400).json({ status: 'fail', message: '無此 ID' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ status: 'fail', message: error.message });
      } else {
        res.status(400).json({ status: 'fail', message: 'Unexpected error' });
      }
    }
  }
);
