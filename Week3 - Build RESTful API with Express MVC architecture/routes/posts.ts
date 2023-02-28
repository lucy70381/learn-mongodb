import express, { Request, Response, NextFunction } from 'express';
import { PostController } from '../controllers/post.controller';

export const postsRouter = express.Router();

postsRouter.get('/', async (req: Request, res: Response) =>
  PostController.getAllPosts(res)
);

postsRouter.get('/:id', async (req: Request, res: Response) =>
  PostController.getPostById(req, res)
);

postsRouter.post('/', async (req: Request, res: Response, next: NextFunction) =>
  PostController.addPost(req, res)
);

postsRouter.patch('/:id', async (req: Request, res: Response) =>
  PostController.updatePost(req, res)
);

postsRouter.delete('/:id', async (req: Request, res: Response) =>
  PostController.deletePostById(req, res)
);
