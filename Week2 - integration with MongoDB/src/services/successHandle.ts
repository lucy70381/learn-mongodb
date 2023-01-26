import { ServerResponse } from 'http';
import headers from './headers';

/** 成功
 * @param res response
 * @param data custom data to send
 */
const successHandle = (res: ServerResponse, data = {}) => {
  res.writeHead(200, headers);
  res.write(
    JSON.stringify({
      status: 'success',
      ...data,
    })
  );
  res.end();
};

export default successHandle;
