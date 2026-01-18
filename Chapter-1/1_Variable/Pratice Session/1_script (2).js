// let const var 
var score = 89;
let myName = "Mukti Prasad ";
const isLoggedin = true;
console.table([score, myName, isLoggedin]);


console.log("---------------------------------------------------------------")

// 1> In "var and let" we can reassign the value but in "const" we can't reassign the value.
// 2> In var we can redeclare but in let and const we cant redeclare.

 var score = 179;
 myName = "Virat Kohali";
 // isLoggedin = false;  //  the value can't change 
 console.table([score, myName, isLoggedin]);


 // 3> var is a function scoped but let and const is a block scoped.
 
//  {
//   var a = 23
//  }
// console.log(a);  dont use this 

 {
  let b = 93
  console.log(b)

  const c = 98;
  console.log(c)
 }
