const startTime = Date.now();
const delay = 2000;
setTimeout(function test() {
  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.log(`Actual time taken: ${timeTaken} milliseconds`);
}, delay);