// Print Even number from 1 to 20 using for loop and while loop

//for loop
//--------------
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is divided by 2`);
  } else {
    console.log(`${i} is not divisible by 2`);
  }
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//while loop
//--------------
let i = 1;
while (i < 21) {
  if (i % 2 === 0) {
    console.log(`${i} is divisible by 2`);
  }
  i++;
}
