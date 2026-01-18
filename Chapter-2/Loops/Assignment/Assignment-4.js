//Print Odd number from 1 to 15 using for loop and while loop

//for loop
//----------
for (let i = 1; i < 16; i++) {
  if (i % 2 === 1) {
    console.log(`${i} is odd num`);
  } else {
    console.log(`${i} is even num`);
  }
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//While Loop
//------------
let i = 1
while(i<16){
  if(i%2 === 1){
    console.log(`${i} is odd num`)
  }else{
    console.log(`${i} is even num`)
  }
  i++
}