import { IncomingMessage, ServerResponse } from 'http';

import { successHandle, errorHandle } from '../../services';
import Post from '../../models/posts';
import PostHandler from '../../controllers/posts';

const GET = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    await PostHandler.getAllPosts(res);
  } catch (error) {
    errorHandle(res, { data: error });
  }
};

export default GET;
