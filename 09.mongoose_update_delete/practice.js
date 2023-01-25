const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error) => console.log(error));

const drinkSchema = new mongoose.Schema({
  product: {
    type: String,
    required: [true, '產品名稱未填寫'],
  },
  price: {
    type: Number,
    required: [true, '價錢未填寫'],
  },
  ice: {
    type: String,
    default: '正常冰',
  },
  sugar: {
    type: String,
    default: '全糖',
  },
  toppings: [String],
});

const Drink = mongoose.model('Drink', drinkSchema);

const init = async () => {
  // 尋找一筆 document 並將 ice 改為 去冰，sugar 改為 半糖
  await Drink.findByIdAndUpdate('63d12eb089b673212df86766', {
    ice: '去冰',
    sugar: '半糖',
  });

  await Drink.findOneAndUpdate(
    { name: '鮮奶茶' },
    {
      ice: '去冰',
      sugar: '半糖',
    }
  );

  // 不會回傳 document
  await Drink.updateOne(
    { name: '鮮奶茶' },
    {
      ice: '去冰',
      sugar: '半糖',
    }
  );

  // 以 ID 尋找一筆 document 並將其刪除
  await Drink.findOneAndDelete('63d12eb089b673212df86766');

  // 刪除全部 documents
  await Drink.deleteMany({});
};

init();
