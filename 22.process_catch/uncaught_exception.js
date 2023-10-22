process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
  process.exit(1);
});

throw new Error('error');
