import { Response } from 'express';

/** 成功
 * @param res response
 * @param data custom data to send
 */
export const successHandle = (res: Response, data = {}) => {
  res.status(200).json({ status: 'success', ...data });
};
