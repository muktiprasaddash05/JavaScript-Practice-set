// Data conversion in Js
//-------------------------

// Number to String convert 
 let score = 100 ;
 console.log(score)
 console.log(typeof (score));

 let myStrscore = String(score);
 console.log(score)
 console.log(typeof (myStrscore))

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// String to Number convert 
let mystrNum = "6171"
console.log(mystrNum)
console.log(typeof (mystrNum));

let myNum = Number(mystrNum)
console.log(typeof (myNum));
console.log(myNum)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// Number to Boolean convert
let boolNum = 454;  // 0, "", NaN, null
console.log(boolNum);
console.log(typeof (boolNum));

let convertboolNum = Boolean(boolNum);
console.log(convertboolNum);
console.log(typeof (convertboolNum))

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Boolean to Number convert
let value = false;
console.log(value);
console.log(typeof (value));

let convertValue = Number(value);
console.log(convertValue);
console.log(typeof (convertValue));