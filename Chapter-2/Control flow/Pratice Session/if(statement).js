const userName = prompt(" Enter your Name ");
const userAge = parseInt(prompt(" Enter your Age "));
const percentage = parseInt(prompt(" Enter your Percentage "));

console.log(`UserName: ${userName}`);
console.log(` Age : ${userAge}`);
console.log(` Percentage: ${percentage}`);

if (percentage >= 75 && percentage <= 100) {
  console.log("Your Achive a 1st Division ");
}
if (percentage >= 50 && percentage <= 60) {
  console.log("Your acive 2nd division");
}
if (percentage >= 30 && percentage <= 50) {
  console.log("Your acive 3rd division");
}
if (percentage <= 30) {
  console.log("fail");
}
console.log("complete");