// map() method :-
//------------------
//Example:1 < create a new array with each number squared >
//------------------------------------------------------------
let firstnum = [2, 4, 6, 8, 10];
const squaredNum = firstnum.map((num) => {
  return num * num;
});
console.log(squaredNum);
console.log(firstnum);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example:2 < create a new array and add "1" each number and print its value, index, array >
//---------------------------------------------------------------------------
const score = [88, 100, 75, 55, 37];
const addArray = score.map((value, index, array) => {
  console.log(index, value, array);
  return value + 1;
});
console.log(addArray);
console.log(score);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example:3 < create a new array and print 1 to 10 numbers and add 10 to each number
//----------------------------------------------------------------------------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myNewNums = myNums.map((num) => num + 10);
console.log(myNewNums);
console.log(myNums);
