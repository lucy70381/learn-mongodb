import { createServer, IncomingMessage, ServerResponse } from 'http';
import mongoose, { MongooseError } from 'mongoose';

import router from './routes/router';

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const DATABASE = process.env.DATABASE?.replace(
  '<password>',
  process.env.DATABASE_PASSWORD ?? ''
);

mongoose.set('strictQuery', false);

mongoose
  .connect(DATABASE ?? '')
  .then(() => console.log('DB connection success'))
  .catch((err: MongooseError) => console.log(err));

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  router(req, res);
});

server.listen(process.env.PORT, () => {
  console.log('Server is running on Port 3005');
});
