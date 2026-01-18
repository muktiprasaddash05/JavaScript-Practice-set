//rest Parameter
//--------------
let num = function (num1, num2, ...evennum) {
  return [num1, num2, evennum];
};
let result = console.log(num(2, 4, 6, 8, 10, 12));

// default Parameter
//--------------------
function studentName(userName = "Mr.Dash") {
  return userName;
}
let names = console.log(studentName());
