import { IncomingMessage, ServerResponse } from 'http';

import postHandler from './post.routes';

const router = (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;
  console.log(url);

  if (url?.startsWith('/posts')) {
    postHandler(req, res);
  }
};

export default router;
