import { IncomingMessage, ServerResponse } from 'http';
import PostController from '../controllers/post.controller';

const postHandler = (req: IncomingMessage, res: ServerResponse) => {
  const reqUrl = req.url;
  const reqMethod = req.method;
  const id = reqUrl?.split('/').pop() ?? '';
  console.log(id);

  switch (reqMethod) {
    case 'GET':
      if (reqUrl === '/posts') {
        PostController.getAllPosts(res);
      } else if (reqUrl?.startsWith('/posts/')) {
        PostController.getPostById(id, res);
      }
      break;
    default:
      break;
  }
};

export default postHandler;
