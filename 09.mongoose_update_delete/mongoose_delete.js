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
  // - deleteMany()
  // 刪除所有 rooms collection 中的 documents
  await Room.deleteMany({});

  // 刪除符合特定條件的多個 documents
  await Room.deleteMany({ rating: { $lt: 3 } });

  // - findByIdAndDelete();
  // 刪除特定 ID 的 documents
  await Room.findByIdAndDelete('621e45063ff3c8af575a7498');
};

init();
