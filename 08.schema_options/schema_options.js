// - versionKey
// 新增 document 時，預設都會在 document 中加上 __v: 0
// 若不需要加上此設定的話，可以設定 versionKey: false 將 versionKey 移除
new mongoose.Schema({}, { versionKey: false });

// - collection
// Mongoose 預設會將 model 連接的 collection 的名稱轉為全小寫，並以複數呈現
// 例如 'User' 會被視為 users
const User = mongoose.model('User', userSchema);

// 若是需要不同的 collection 名稱，可以透過 { collection: '...' }) 更改
new mongoose.Schema({}, { collection: 'data' });
// 若是 mongoose.model('Test', Schema);
// 設定不同的 collection 名稱，仍然會以 { collection: 'data' } 為主

// - timestamps
// 可以透過 { timestamps: true } 為每筆新增的 document 加上 createdAt 和 updatedAt 欄位
// 也可以透過 { timestamps: { createdAt: 'created_at' }, { updatedAt: 'updated_at' } }
// 自定義 createdAt 和 updatedAt 欄位

// 若只想加入其中一個欄位，則可以將欄位加在 Schema 中
new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 若不希望在前端顯示資料建立時間也可以加入 select: false 設定
new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
});
