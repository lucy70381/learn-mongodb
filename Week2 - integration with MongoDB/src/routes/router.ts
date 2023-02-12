import { IncomingMessage, ServerResponse } from 'http';

import postRoute from './post.routes';

const router = (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;

  if (url?.startsWith('/posts')) {
    postRoute(req, res);
  }
};

export default router;
