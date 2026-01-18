//filter () method :-
//---------------------
// Example:1 < create a new array & filter the even numbers >
const numbers = [2, 5, 7, 8, 10, 6, 17, 18, 20, 13];
const evennum = numbers.filter((num) => num % 2 === 0);
console.log(evennum);
console.log(numbers);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//EX:2 < create a  new  array and apply a filter method >
const num = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
const mynewnum = num.filter((a) => {
  return a > 50;
});
console.log(num);
console.log(mynewnum);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example:3 < Get students who passed (marks ≥ 40) >
const marks = [35, 27, 39, 40, 50, 72, 28, 90];
const passed = marks.filter((m) => m >= 40);
console.log(marks);
console.log(passed);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example: 4 < use filter method Object with array >
let avengersInfo = [
  { moviename: "Ironman", relaesedate: "2002", view: "3M" },
  { moviename: "Captain-America", relaesedate: "2004", view: "2.9M" },
  { moviename: "The-Hulk", relaesedate: "2005", view: "2M" },
  { moviename: "The-SpiderMan", relaesedate: "2001", view: "4M" },
  { moviename: "The End Game", relaesedate: "2019", view: "40M" },
  { moviename: "Infinity War", relaesedate: "2018", view: "20M" },
  { moviename: "The-Avengers", relaesedate: "2015", view: "17M" },
];
let storeMovie = avengersInfo.filter((moviename) => {
  return moviename.relaesedate <=2005 && moviename.view <="4M";
});
console.log(storeMovie);
