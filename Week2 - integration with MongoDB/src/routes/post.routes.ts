import { Resolver } from 'dns';
import { IncomingMessage, ServerResponse } from 'http';
import PostController from '../controllers/post.controller';

const postHandler = async (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req;

  // get data from request
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  // wait until the request is finished
  await new Promise((resolve) => req.on('end', resolve));

  const id = url?.split('/').pop() ?? '';
  console.log(id);

  switch (method) {
    case 'GET':
      if (url === '/posts') {
        PostController.getAllPosts(res);
      } else if (url?.startsWith('/posts/')) {
        PostController.getPostById(id, res);
      }
      break;
    case 'POST':
      if (url === '/posts') {
        PostController.addPost(body, res);
      }
    case 'PATCH':
      if (url?.startsWith('/posts/')) {
        PostController.updatePost(id, body, res);
      }
    default:
      break;
  }
};

export default postHandler;
