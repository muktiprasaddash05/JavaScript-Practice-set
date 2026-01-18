//Passing Parameter and Argument 
//----------------------------------
// process:-1
function myfunc(num1, num2) {
  console.log(num1 + num2);
}
let result = myfunc(23, 5);
console.log(result);

//Process :-2
//------------
let introduceMe = function (name, course, age) {
  console.log(`Hey! My Name is ${name}`);
  console.log(`My Class is ${course}`);
  console.log(`My Age is ${age}`);
};
introduceMe("Mukti", "MCA", 23);
introduceMe("Sudhir", "B-pharma", 21);
introduceMe("Ashutosh", "B-tech", 23);
