import { ServerResponse } from 'http';
import headers from './headers';

/** request fail
 * @param res response
 * @param errorData custom error to send
 * @param errorCode default status code is 400
 */
const errorHandle = (
  res: ServerResponse,
  errorData: object = {},
  errorCode: number = 400
) => {
  res.writeHead(errorCode, headers);
  res.write(
    JSON.stringify({
      status: 'fail',
      ...errorData,
    })
  );
  res.end();
};

export default errorHandle;
