// 指定其中一個 _id
// 並將該筆 document 的 group 改為 D
// updateOne()可允許更新特定欄位
// $currentDate 屬性，會再修改資料成功後顯示出最新修改的時間
db.students.updateOne(
  { _id: ObjectId('63cfa26c5208db9969db31c5') },
  {
    $set: { group: 'D' },
    $currentDate: {
      lastModified: true,
    },
  }
);

// 將 group 為 B 的多筆 document
// isPaid 改為 true
db.students.updateMany(
  { group: 'B' },
  {
    $set: { isPaid: true },
  }
);
