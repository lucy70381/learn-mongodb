import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { indexRouter } from './routes/index';
import { postsRouter } from './routes/posts';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/learn-mongo');

const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

module.exports = app;
