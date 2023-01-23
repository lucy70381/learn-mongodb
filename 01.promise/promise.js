// const checkStore = (score) => {
//   /* 回傳一個 Promise，並執行以下非同步操作*/
//   const score = Math.round(Math.random() * 100);
//   /* 判斷流程請嘗試使用 setTimeout() 執行 */
//   if (score >= 60) {
//     console.log(score); // 執行實現方法
//   } else {
//     console.log('不及格'); // 執行拒絕方法
//   }
// };

// 將 checkStore 函式使用 Promise 語法改寫
const checkStorePromise = (score) => {
  return new Promise((resolve, reject) => {
    const score = Math.round(Math.random() * 100);
    setTimeout(() => {
      if (score >= 60) {
        resolve(score);
      } else {
        reject('不及格');
      }
    });
  }, 1000);
};

checkStorePromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
