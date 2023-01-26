import { IncomingMessage, ServerResponse } from 'http';

import postHandler from './post.routes';

const router = (req: IncomingMessage, res: ServerResponse) => {
  const { url } = req;

  switch (url) {
    case '/posts':
      postHandler(req, res);
      break;
    default:
      break;
  }
};

export default router;
