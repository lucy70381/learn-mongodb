// posts JSON 資料：https://drive.google.com/file/d/1VCuWX2M6K-Du8pWlrcGImO_ux4Zwsa6v/view?usp=sharing

/* 
貼文集合欄位介紹
- name：貼文姓名
- image：貼文圖片
- content：貼文內容
- likes：按讚數
- comments：留言數
- createdAt：發文時間
- type：貼文種類[friend(摯友)、group(社團)]
- tags：貼文標籤
 */

// 搜尋 name 欄位為 “Ray Xu” 的 document 列表
db.posts.find({ name: 'Ray Xu' });

// 新增一筆 document，請全部欄位皆填寫
db.posts.insertOne({
  name: 'Movie',
  tags: ['電影', '愛情'],
  type: 'friend',
  image: 'https://picsum.photos/200/300',
  createdAt: '2023-01-24 15:01:43 UTC',
  content: 'test',
  likes: 2,
  comments: 10,
});

// 新增多筆 document，請全部欄位皆填寫
db.posts.insertMany([
  {
    name: 'Drama',
    tags: ['少年', '愛情'],
    type: 'group',
    image: 'https://picsum.photos/200/300',
    createdAt: '2023-01-24 15:05:43 UTC',
    content: 'test',
    likes: 6,
    comments: 7,
  },
  {
    name: 'Drama2',
    tags: ['教育'],
    type: 'group',
    image: 'https://picsum.photos/200/300',
    createdAt: '2023-01-24 15:06:43 UTC',
    content: 'test',
    likes: 10,
    comments: 12,
  },
]);

// 修改一筆 document
// filter 條件請用 _id 指定其中一筆資料，content 欄位調整為測試資料
db.posts.updateOne(
  { _id: ObjectId('63cff41403594b253d7fb3a1') },
  { $set: { content: '測試資料' } }
);

// 修改多筆 name 欄位為 "Ray Xu" 的 document 列表
// content 欄位都調整為哈哈你看看你
db.posts.updateMany({ name: 'Ray Xu' }, { $set: { content: '哈哈你看看你' } });

// 刪除一筆 document
// filter 條件請用 _id 任意指定其中一筆資料
db.posts.deleteOne({ _id: ObjectId('63cff41403594b253d7fb3a1') });

// 刪除多筆 document
// filter 條件請用 type 為 group 的值，刪除所有社團貼文
db.posts.deleteMany({ type: 'group' });

// 刪除多筆 document，filter 條件為以下條件
// a. name:"Ray Xu"
// b. likes: 500(含) 個讚以下
db.posts.deleteMany({ type: 'group', likes: { $lte: 500 } });

// 查詢全部 posts 的 document 列表
db.posts.find();

// 關鍵字搜尋 name 裡面含有 o 的 document 列表
db.posts.find({ name: /o/ });

// 查詢name 欄位為 "Ray Xu"
// filter 篩選出介於 500~1000(含) 個讚（大於等於 500、小於等於 1000）
db.posts.find({
  name: 'Ray Xu',
  likes: { $gte: 500, $lte: 1000 },
});

// 查詢 comments 有大於等於 500 以上的 document 列表
db.posts.find({
  comments: { $gte: 500 },
});

// 查詢 tags 欄位，有 謎因 或(or) 幹話 的 document 列表
db.posts.find({
  tags: { $in: ['謎因', '幹話'] },
});

// 查詢 tags 欄位，有 幹話 的 document 列表，需隱藏 _id 欄位
db.posts.find(
  {
    tags: { $in: ['謎因'] },
  },
  { _id: 0 }
);

// 請嘗試用 Mongo Shell 指令刪除全部 Documents
db.posts.deleteMany({});
