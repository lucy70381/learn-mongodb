// posts 所有 document 數量為？(回傳數字)
db.posts.find().count();

// 請查詢 name 為 Ray Xu 的 document 列表，排序為由新到舊
// 升序: 1，降序: -1
db.posts.find({ name: 'Ray Xu' }).sort({ createdAt: -1 });

// 請查詢 name 為 Ray Xu 的 document 列表
// 顯示前 30 筆資料
db.posts.find({ name: 'Ray Xu' }).limit(30);

// 請查詢 name 為 Ray Xu
// 顯示100(含) 個讚以上的前 30 筆 document 列表，時間排序由新到舊
db.posts
  .find({ name: 'Ray Xu', likes: { $gte: 100 } })
  .limit(30)
  .sort({ createdAt: -1 });

// 請查詢 comments 超過 100 的 document 列表，跳過前 30 筆資料，再顯示 30 筆資料
db.posts
  .find({ comments: { $gt: 100 } })
  .skip(30)
  .limit(30);

// 尋找超夯熱門貼文，請查詢 likes 且(and) comments 都 1,500(含)以上的 document 列表
db.posts.find({ likes: { $gte: 1500 }, comments: { $gte: 1500 } });

db.posts.find({
  $and: [{ likes: { $gte: 1500 } }, { comments: { $gte: 1500 } }],
});

// 尋找普通熱門貼文，請查詢 likes 或(or) comments ， 1,000(含)以上 的 document 列表
db.posts.find({
  $or: [{ likes: { $gte: 1000 } }, { comments: { $gte: 1000 } }],
});

// 查詢 image 欄位為 null 的 document 列表
db.posts.find({ image: null });

// 隨意找一筆 document 資料，將 tags 欄位裡的陣列，新增一個新 tags 為 遊記
db.posts.updateOne(
  { _id: ObjectId('63cffb25635f972a5e75e365') },
  { $push: { tags: '遊記' } }
);

db.posts.updateOne(
  { _id: ObjectId('63cffb25635f972a5e75e365') },
  { $addToSet: { tags: '遊記' } }
);

// 將所有 tags 陣列裡的 感情 都移除
db.posts.updateMany({}, { $pull: { tags: '感情' } });
