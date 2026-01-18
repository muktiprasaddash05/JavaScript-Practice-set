// for...in loop
//------------------

//Example:1 < for...in loop using object >
let personInfo = {
  name: "Mukti",
  Age: 23,
  city: "Banagalore",
  cousre: "MERN stack Development",
};
for (let i in personInfo) {
  console.log(i, ":", personInfo[i]);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

const user = {
  name: "Mukti Prasad Dash",
  age: 23,
  address: {
    city: "Purushottampur",
    pincode: 761019,
  },
};
for (let key in user) {
  console.log(key, ":-", user[key]);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

// Example:3 < for...in loop  using array >
const colors = ["Purple", "Cyan", "green", "black", "Yellow"];
for (let index in colors) {
  console.log(index, ":-", colors[index]);
}

//Example:4 < using String >

const mantra = " Hare krishna Hare Rama ";
for (let index in mantra) {
  console.log(index + ": " + mantra[index]);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Example:5 <using break>
let numbers = [17, 5, 23, 94, 77, 53, 84];
for (let i in numbers) {
  if (numbers[i] === 23) {
    break;
  }
  console.log(i, ":", numbers[i]);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Example:5 <using continue>
let num = [17, 5, 23, 94, 77, 53, 84];
for (let i in num) {
  if (num[i] === 23) {
    continue;
  }
  console.log(i, ":", num[i]);
}
