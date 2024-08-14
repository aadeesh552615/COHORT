const fs = require("fs");
const path = "/Users/aadeeshbali/Developer/LV/COHORT/Week 1/Demo.txt";
// Asynchronous Way
fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

//Synchronous Way
// try {
//   const data = fs.readFileSync(
//     path,
//     "utf-8"
//   );
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

console.log("Hi from above!");
let a = 0;
for (let i = 1; i < 10000000000; i++) {
  a += i;
}
console.log("Hi from below!");
