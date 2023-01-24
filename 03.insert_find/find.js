// 查詢 students collection 中的所有資料
db.students.find();

// 查詢 students collection 中
// 符合 group 屬性為 B 的資料
// 使用 { <field>: <value> } 設定符合的項目
db.students.find({ group: 'B' });

// 查詢 students collection 中
// 符合分數在 60 分以上的的資料
db.students.find({ score: { $gt: 60 } });

// 查詢 students collection 中
// 符合分數在 60 分以下
// 或是 group 為 B 的資料
db.students.find({ $or: [{ score: { $lt: 60 } }, { group: 'B' }] });
