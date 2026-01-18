// reduce() method
//--------------------

// Example:1 < use reduce() method and print the sum of number just basic understand of reduce() method.>
const myNums = [1, 2, 3, 4, 5];
const mytotal = myNums.reduce(function (acc, currval) {
  console.log(`acc :${acc} and the current value is ${currval}`);
  return acc + currval;
}, 0);
console.log(mytotal);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//Example:2 < use reduce () metho and create a number of an array and sum the number (using arrow function) >
//----------------------------------------------------------------------------
const price = [1000, 57700, 73920, 23000, 5000];
const totalPrice = price.reduce((acc, num) => acc + num, 0);
console.log(`The Total Price is ${totalPrice} `);


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Example:3 < Find the  maximum number >
const nums = [15, 72, 8, 90, 34];
const max = nums.reduce((acc,num) => num>acc ?num:acc,nums[0]);
console.log(max)


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


// Example:4 < Use the reduce method and calculate the price the below example>
let avengersInfo = [
  { moviename: "Ironman", relaesedate: "2002", view: "3M" , price:1500},
  { moviename: "Captain-America", relaesedate: "2004", view: "2.9M", price:1200},
  { moviename: "The-Hulk", relaesedate: "2005", view: "2M", price:1100 },
  { moviename: "The-SpiderMan", relaesedate: "2001", view: "4M", price:1300 },
  { moviename: "The End Game", relaesedate: "2019", view: "40M", price:1900},
  { moviename: "Infinity War", relaesedate: "2018", view: "20M", price:1600},
  { moviename: "The-Avengers", relaesedate: "2015", view: "17M", price:1500 },
];

let calPrice = avengersInfo.reduce((acc, currval) => {
  return acc + currval.price
},0)
console.log(calPrice)
