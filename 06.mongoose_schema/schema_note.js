const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
  .connect('mongodb://127.0.0.1:27017/learn-mongo')
  .catch((error) => console.log(error));

/* 
若 title 是一個物件，可以針對裡面的屬性設定型別
title: {
  chinese: {type: String},
  english: {type: String}
}

若 title 為一個陣列，也可指定陣列中資料型別
title: [{type: String}] // 若只有設定型別可以使用簡寫 [String]

required
若此資料需為必填項目，可以設定 required，並且可客製化錯誤訊息，格式如下：

title: {
  type: String,
  required: [true, 'title 為必填']
}

default
若有資料未填寫，也可以設定此資料的預設值

title: {
  type: String,
  default: '未命名的文章'
}

select
若有資料欄位希望可以被保護，不顯示出來，可以加入 select 設定
例如：若有涉及使用者相關個資 password、email …等等，都會建議加入 select: false 不將資料回傳給前端

password: {
  type: String,
  select: false
}

enum
若此資料設定型別為 String 或 Number，可以設定 enum 指定需為哪些值
以字串為例，若 author 需為 Amy、Bob 或 Cody 其中之一，可以設定為以下：

author: {
  type: String,
  enum: ['Amy','Bob','Cody']
}
 */

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now() },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});
