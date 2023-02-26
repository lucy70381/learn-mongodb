import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// 登入
app.get('/login', (req: Request, res: Response) => {
  res.send('登入');
});

// 註冊
app.get('/register', (req: Request, res: Response) => {
  res.send('註冊');
});

// 全體動態牆
app.get('/posts', (req: Request, res: Response) => {
  res.send('全體動態牆');
});

// 個人牆
app.get('/user/:id', (req: Request, res: Response) => {
  res.send(`${req.params.id} 的個人牆`);
});

// 個人追蹤名單
app.get('/user/:id/follow', (req: Request, res: Response) => {
  res.send(`${req.params.id} 的追蹤名單`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
