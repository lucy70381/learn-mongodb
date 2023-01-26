import { ServerResponse, IncomingMessage } from 'http';
import Post from '../models/posts';
import { successHandle } from '../services';

const PostHandler = {
  getAllPosts: async (res: ServerResponse) => {
    try {
      const posts = await Post.find();
      successHandle(res, { data: posts });
    } catch (error) {}
  },
};
export default PostHandler;
