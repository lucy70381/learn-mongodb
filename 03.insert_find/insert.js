// 新增一筆 insertOne
db.students.insertOne({
  studentName: 'Riley Parker',
  group: 'A',
  score: 83,
  isPaid: false,
});

// 新增多筆 insertMany
db.students.insertMany([
  {
    studentName: 'Brennan Miles',
    group: 'C',
    score: 72,
    isPaid: false,
  },
  {
    studentName: 'Mia Diaz',
    group: 'B',
    score: 98,
    isPaid: true,
  },
  {
    studentName: 'Caroline morris',
    group: 'B',
    score: 55,
    isPaid: false,
  },
  {
    studentName: 'Beverly Stewart',
    group: 'B',
    score: 60,
    isPaid: false,
  },
]);
