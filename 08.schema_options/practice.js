// 調整手搖飲的 Schema

// 加入 createdAt 欄位，並設定為隱藏欄位（不會顯示於前端）
// 隱藏 versionKey 欄位
const drinkSchema = new mongoose.Schema(
  {
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

    /* 填入 Schema 內容 */
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    /* 填入 options 內容 */
    versionKey: false,
  }
);
