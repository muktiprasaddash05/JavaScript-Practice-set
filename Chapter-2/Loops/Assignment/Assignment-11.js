//Skip Multiple of 3
// Write a loop from 1 to 20 that :
//              i> Skips number divisible  by 3
//              ii> Print all others numbers

for (let i = 1; i < 21; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i)
}
