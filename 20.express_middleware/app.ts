import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/learn-mongo');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
