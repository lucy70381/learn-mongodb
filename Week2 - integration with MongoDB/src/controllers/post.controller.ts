import { ServerResponse, IncomingMessage } from 'http';
import Post from '../models/posts';
import { errorHandle, successHandle } from '../services';

const PostController = {
  getAllPosts: async (res: ServerResponse) => {
    try {
      const posts = await Post.find();
      successHandle(res, { data: posts });
    } catch (error) {
      console.log(`Can't get all posts: ${error}`);
      errorHandle(res, { data: error });
    }
  },
};

export default PostController;
