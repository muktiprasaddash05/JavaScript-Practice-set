//Arithmatic Operator
//---------------------
let a = 89 ;
let b = 92 ;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
let c = a++
console.log(c)

let d = ++a
console.log(d)

let e = b--
console.log(e)

let f = --b
console.log(f)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Assignment Operator
//----------------------
let z = 9181
let m = 9181
console.log(z = m);
console.log(z += 10);
console.log(z -= 30);
console.log(z *= 17);
console.log(z /= 50);
console.log(z %= 5);
console.log(z **= 7);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Comparison Operator
//------------------------
let score1 = 33;
let score2 = "33";
console.log(score1 == score2);
console.log(score1 === score2);
console.log(score1 != score2);
console.log(score1 !== score2);  
console.log(score1 < score2);  
console.log(score1 > score2);  
console.log(score1 <= score2);  
console.log(score1 >= score2);  

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Logical Operator
//---------------------
let myval = 22 ;
let myval2 = 29;
console.log(22<29 && 22<29);
console.log(22<29 || 29<22);
console.log(!22)
console.log(!0)

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// typeof and instanceof
//--------------------------
let tradeVal = 989272989927928729276282n;
console.log(typeof (tradeVal));

let obj = {
  gameName: "wwe",
  price: 20000,
  avaible: "Netflix",
  isLoggedin: false,
}
console.log(obj)
console.log(obj instanceof Object);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

// Teranary Operator
//----------------------
const mark = 77;
let grade = mark >= 90 ? " grade:A " : mark >= 75 ? " grade:B " : mark >= 60 ? "grade:c" : "fail";
console.log(grade);
