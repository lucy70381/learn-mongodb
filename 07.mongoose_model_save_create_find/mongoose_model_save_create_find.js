const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error) => console.log(error));

const roomSchema = mongoose.Schema({
  name: String,
  price: {
    type: Number,
    required: [true, '價格必填'],
  },
  rating: Number,
});

// 第一個參數為 Collection 的名稱
// Mongoose 會自動視為小寫開頭及改為複數（結尾加 s）
// 因此 Room Model 實際上是連接至名稱為 rooms 的 Collection
// 第二個參數帶入 Schema
const Room = mongoose.model('Room', roomSchema);

// Mongoose 新增
// 使用 new 建立 Room 的實體（instance）-> document
const testRoom = new Room({
  name: '總統套房單人房',
  price: 2000,
  rating: 4.5,
});

// 使用 save() 將其儲存到 rooms Collection 中
testRoom
  .save()
  .then(() => console.log('新增資料成功'))
  .catch((error) => console.log(error));

//也可以使用另一種方式 create()
Room.create({
  name: '總統套房單人房',
  price: 2000,
  rating: 4.5,
});

// Mongoose 查詢
Room.find().then((res) => console.log(res));
