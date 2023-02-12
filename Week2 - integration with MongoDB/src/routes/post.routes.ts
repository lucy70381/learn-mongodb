import { Resolver } from 'dns';
import { IncomingMessage, ServerResponse } from 'http';
import PostController from '../controllers/post.controller';
import { errorHandle } from '../services';

const postRoute = async (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req;

  // get data from request
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  // wait until the request is finished
  await new Promise((resolve) => req.on('end', resolve));

  const id = url?.split('/').pop() ?? '';

  if (method === 'GET' && url === '/posts') {
    PostController.getAllPosts(res);
  } else if (method === 'GET' && url?.startsWith('/posts/')) {
    PostController.getPostById(id, res);
  } else if (method === 'POST' && url === '/posts') {
    PostController.addPost(body, res);
  } else if (method === 'PATCH' && url?.startsWith('/posts/')) {
    PostController.updatePost(id, body, res);
  } else if (method === 'DELETE' && url?.startsWith('/posts/')) {
    PostController.deletePostById(id, res);
  } else {
    errorHandle(res, { data: 'Invalid request' }, 404);
  }
};

export default postRoute;
