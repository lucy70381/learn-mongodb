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

const Drink = mongoose.model('drink', drinkSchema);

const testDrink = new Drink({
  product: '鮮奶茶',
  price: 55,
  sugar: '微糖',
});

testDrink
  .save()
  .then(() => console.log('新增資料成功'))
  .catch((error) => console.log(error));

Drink.create({
  product: '鮮奶茶',
  price: 55,
  sugar: '微糖',
});
