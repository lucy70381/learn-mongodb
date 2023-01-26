// const routeWrapper = (routePath: String, targetRoute) => {};

import { IncomingMessage, ServerResponse } from 'http';
import postHandler from './post';

const routes = (req: IncomingMessage, res: ServerResponse) => {
  const reqUrl = req.url;
  const reqMethod = req.method;

  switch (reqUrl) {
    case '/posts':
      postHandler(req, res);
      break;
    default:
      break;
  }
};

export default routes;
