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

const Room = mongoose.model('Room', roomSchema);

const init = async () => {
  // - findByIdAndUpdate()
  // 修改單筆 ID document
  // 帶入參數 id，以及需修改的欄位
  await Room.findByIdAndUpdate('63d1287f49515b773bd2de30', {
    name: '海景雙人房',
  });

  // - updateOne()
  // 修改單筆特定條件之 document
  await Room.updateOne({ name: '海景雙人房' }, { price: 4500 });

  // - updateMany()
  // 修改多筆特定條件之 document
  await Room.updateMany({ name: '海景雙人房' }, { price: 4500 });
};

init();
