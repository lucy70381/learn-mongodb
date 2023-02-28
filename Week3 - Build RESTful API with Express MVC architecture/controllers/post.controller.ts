import { Request, Response } from 'express';
import Post from '../models/Post';
import { errorHandle, successHandle } from '../services';

export const PostController = {
  getAllPosts: async (res: Response) => {
    try {
      const posts = await Post.find();
      successHandle(res, { data: posts });
    } catch (error) {
      errorHandle(res, { data: `Can't get all posts` });
    }
  },
  getPostById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (post) {
        successHandle(res, { data: post });
      } else {
        errorHandle(res, { data: `Post id: ${id} not found` });
      }
    } catch (error) {
      errorHandle(res, { data: `Can't get post by id: ${id}` });
    }
  },
  addPost: async (req: Request, res: Response) => {
    const data = req.body;
    try {
      const post = await Post.create(data);
      if (post) {
        successHandle(res, { data: post });
      } else {
        errorHandle(res, { data: `Can't add post` });
      }
    } catch (error) {
      errorHandle(res, { data: `Can't add post. ${error}` });
    }
  },
  updatePost: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const editPost = await Post.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
      });
      if (editPost) {
        successHandle(res, { msg: 'Post updated', data: editPost });
      } else {
        errorHandle(res, { data: `Post id: ${id} not found` });
      }
    } catch (error) {
      errorHandle(res, { data: `Can't update post. ${error}` });
    }
  },
  deletePostById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const post = await Post.findByIdAndDelete(id);
      if (post) {
        successHandle(res, { msg: `Post ${id} deleted.` });
      }
    } catch (error) {
      errorHandle(res, { data: `Can't delete post. ${error}` });
    }
  },
};
