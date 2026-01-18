// for... each :-
//-----------------

//Example:1  < using normal for...each loop >
//-------------------------------------------
let numbers = [17, 5, 23, 94, 77, 53, 84];
numbers.forEach((num) => {
  console.log(num);
});

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example:2 < using for... each loop and print index and array>
//-----------------------------------------------------------------
const superHero = ["spiderman", "superman", "batman", "flash", "ironman"];
superHero.forEach((index, favHero, arr) => {
  console.log(index, favHero, arr);
});

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example:4 < for...each loop not return anything >
//------------------------------------------------------
const mark = [1, 2, 3, 4, 5];

const result = mark.forEach((num) => {
  console.log(num * 2); // bas print karega
});

console.log(result); // ❌ undefined

