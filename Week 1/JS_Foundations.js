//arrays
const personArray = ["aadeesh", "vasu", "aps"];
const genderArray = ["male", "male", "female"];

for (let i = 0; i < personArray.length; i++) {
  if (genderArray[i] === "male") {
    // console.log(personArray[i]);
  }
}

//objects
const user1 = {
  name: "aadeesh",
  gender: "male",
};
// console.log(user1.name);

//array of objects
const allUsers = [
  { name: "aadeesh", gender: "male" },
  { name: "vasu", gender: "male", metadata: { age: 21, city: "jammu" } },
  { name: "aps", gender: "female" },
];
const length = allUsers.length;
for (let i = 0; i < length; i++) {
  if (allUsers[i].metadata) {
    // console.log(allUsers[i].metadata.age);
  }
}

//functions
function sum(a, b) {
  let result = a + b;
  return result;
}

function sub(a, b) {
  let result = 0;
  if (a >= b) {
    result = a - b;
  } else {
    result = b - a;
  }
  return result;
}
//callbacks
function calculator(a, b, arithmaticOperation) {
  console.log(arithmaticOperation(a, b));
}

calculator(4, 9, sub);
