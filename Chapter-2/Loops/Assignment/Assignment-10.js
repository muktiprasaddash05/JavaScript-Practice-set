// Stops at first multiple of 7
// -> Write a Loop from 1 to 100 that and print each number .
// -> Stops completely where it finds the first number divisible by 7 .

for (let i = 1; i < 101; i++) {
  if (i % 7 === 0) {
    continue;
  }
  console.log(i);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// Method :-2 

for (let j = 1; j < 101; j++) {
  if (j % 7 === 0) {
    break;
  }
  console.log(j);
}
