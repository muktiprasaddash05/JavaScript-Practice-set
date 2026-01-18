// "use strict"  // alll js code treat as a new version

//Primitive DataTypes
//-----------------------
let a = 17; //number
let b = "mukti prasad"; //string
let c = true; // boolean
let d = 99987261298176528126129161712981715392n; //bigint
let e; // undefined
let f = Symbol("uid"); // symbol
let g = Symbol("uid"); // symbol
let h = null; // null
console.table([a, b, c, d, e, f, g, h]);
console.log(f === g);
console.log(e);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// Non-Primitive Data Types(or) Refrence DataTypes
//----------------------------------------------------
let arr = [1, "sri ram", null, undefined, true, {}];
console.log(arr); // Array 

let obj ={
  name: "mukti",
  age:23,
  isLoggedin: true,
}
console.log(obj)
console.log(obj["isLoggedin"]);

let myData = function () {
  console.log(3+4)
}
myData(); // function