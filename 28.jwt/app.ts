import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const id = '1234567890';

const token = jwt.sign({ id: id }, process.env.JWT_SECRET!, {
  expiresIn: process.env.JWT_EXPIRES_DAY,
});

console.log(token);

