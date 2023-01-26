import { IncomingMessage, ServerResponse } from 'http';

import $posts from '../api/posts';

const postHandler = (req: IncomingMessage, res: ServerResponse) => {
  const reqUrl = req.url;
  const reqMethod = req.method;

  switch (reqMethod) {
    case 'GET':
      $posts.GET(req, res);
      break;
    default:
      break;
  }
};

export default postHandler;
