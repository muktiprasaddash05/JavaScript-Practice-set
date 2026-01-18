//Print First 5 odd numbers only. Write a loop from 1 to 100 and print only 5 odd numbers and then stops the loop
let count = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }
  if (count === 5) break;
}
 




