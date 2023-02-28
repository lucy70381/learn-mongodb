import { Response } from 'express';

/** request fail
 * @param res response
 * @param errorData custom error to send
 * @param errorCode default status code is 400
 */
export const errorHandle = (
  res: Response,
  errorData: object = {},
  errorCode: number = 400
) => {
  res.status(errorCode).json({ status: 'fail', ...errorData });
};
