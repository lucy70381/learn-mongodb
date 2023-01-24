// replaceOne() 會替換整個文件
db.students.replaceOne({ isPaid: false }, { name: 'test' });
