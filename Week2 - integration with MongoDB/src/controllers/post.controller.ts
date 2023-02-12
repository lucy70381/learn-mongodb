import { ServerResponse, IncomingMessage } from 'http';
import Post from '../models/Post';
import { errorHandle, successHandle } from '../services';

const PostController = {
  getAllPosts: async (res: ServerResponse) => {
    try {
      const posts = await Post.find();
      successHandle(res, { data: posts });
    } catch (error) {
      console.log(`Can't get all posts: ${error}`);
      errorHandle(res, { data: `Can't get all posts` });
    }
  },
  getPostById: async (id: String, res: ServerResponse) => {
    try {
      const post = await Post.findById(id);
      successHandle(res, { data: post });
    } catch (error) {
      console.log(`Can't get post by id: ${error}`);
      errorHandle(res, { data: `Can't get post by id: ${id}` });
    }
  },
  addPost: async (body: string, res: ServerResponse) => {
    try {
      const post = await Post.create(JSON.parse(body));
      successHandle(res, { data: post });
    } catch (error) {
      errorHandle(res, { data: `Can't add post. ${error}` });
    }
  },
  updatePost: async (id: string, body: string, res: ServerResponse) => {
    try {
      // check if post exists (if not, findByIdAndUpdate will create a new post
      try {
        await Post.findById(id);
      } catch (error) {
        errorHandle(res, { data: `Post id: ${id} not found` });
        return;
      }
      const post = await Post.findByIdAndUpdate(id, JSON.parse(body), {
        returnDocument: 'after', // return the updated document
      });
      successHandle(res, { msg: 'Post updated', data: post });
    } catch (error) {
      errorHandle(res, { data: `Can't update post. ${error}` });
    }
  },
};

export default PostController;
