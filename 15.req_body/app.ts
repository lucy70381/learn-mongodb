import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { indexRouter } from './routes/index';

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/learn-mongo');

const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
