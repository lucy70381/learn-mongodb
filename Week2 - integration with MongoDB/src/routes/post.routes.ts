import { IncomingMessage, ServerResponse } from 'http';
import PostController from '../controllers/post.controller';

const postHandler = (req: IncomingMessage, res: ServerResponse) => {
  const reqUrl = req.url;
  const reqMethod = req.method;

  switch (reqMethod) {
    case 'GET':
      PostController.getAllPosts(res);
      break;
    default:
      break;
  }
};

export default postHandler;
