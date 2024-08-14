function calculateSum(n) {
  return (sum = (n * (n + 1)) / 2);
}
setTimeout(() => {
  console.log(calculateSum(100000000));
}, 5000);
console.log("Hello");
