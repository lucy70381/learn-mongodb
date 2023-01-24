// 將 studentName 包含關鍵字 Brennan 的 document 刪除
db.students.deleteOne({ studentName: /Brennan/ });

// 將 isPaid 為 true 的多筆 document 刪除
db.students.deleteMany({ isPaid: true });
