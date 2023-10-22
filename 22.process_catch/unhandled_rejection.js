process.on('unhandledRejection', (reason, promise) => {
  console.error('unhandledRejection', reason, promise);
});

Promise.reject(new Error('error'));
