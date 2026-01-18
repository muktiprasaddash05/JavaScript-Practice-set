// Find the Factorial of any number
let userNum = +prompt("Enter a Number");
let factNum = 1;
for (let i = 1; i <= userNum; i++) {
  factNum = factNum * i;
}
console.log(factNum);
