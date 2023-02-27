import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// localhost:3000/products?category=music&page=1
app.get('/products', function (req, res) {
  // 取出參數
  const { category, page } = req.query;
  /* 請在此填寫答案*/
  res.status(200).json({
    status: 'success',
    data: {
      /* 請在此填寫答案*/
      category,
      page,
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
