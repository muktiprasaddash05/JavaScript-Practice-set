// arrow function :-
//-------------------
const square = (num) => {
  return num * num;
};
let result = console.log(square(5));

//++++++++++++(or implicit return)+++++++++++++++++++++++++++++++++
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(5, 5));

//Example:2
const random = () => {
  return Math.floor(Math.random() * 10) + 1;
};
console.log(random())
