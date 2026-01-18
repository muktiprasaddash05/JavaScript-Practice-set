// Count how many digit are there in a number ?
let userNum = 739281;
let count = 0 ;
while (userNum > 0) {
  userNum = Math.floor(userNum / 10);
  count++;
}
console.log(count);


