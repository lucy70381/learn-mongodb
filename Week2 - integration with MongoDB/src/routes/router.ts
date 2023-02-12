import { IncomingMessage, ServerResponse } from 'http';
import { errorHandle } from '../services';

import postRoute from './post.routes';

const router = (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;

  if (url?.startsWith('/posts')) {
    postRoute(req, res);
  } else {
    errorHandle(res, { data: 'Invalid request' }, 404);
  }
};

export default router;
