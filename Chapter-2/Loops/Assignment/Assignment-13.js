// Reverse a number and the number is :12345

let num = 987123;
let rev = 0;
while (num > 0) {
  let digit = num % 10;     
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}
console.log(rev);
