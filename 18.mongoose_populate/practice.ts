import mongoose from 'mongoose';
import Author from './models/author';
import Book from './models/book';

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error: any) => console.log(error));

const init = async () => {
  const author = new Author({
    name: 'Lucy',
    introduction: 'lalala~',
  });
  await author.save();
  console.log(author);

  const book = new Book({
    title: 'This is title',
    author: author._id,
  });
  await book.save();
  console.log(book);
};

const search = async (id: String) => {
  const book = await Book.find({ _id: id }).populate({
    path: 'author',
    select: 'name',
  });
  console.log(book);
  
};

// init();
search('652ba929faf48bd3760c11aa');
