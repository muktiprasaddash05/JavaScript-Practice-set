//Global Variable
//------------------
// The global scope means variable or function that can be accessed form anywhere in the code
let score = 73;
function value() {
  return `my score is ${score}`;
}
console.log(value());
  
    
//Local Scope
//--------------------
// A local scope means a variable declared inside a function or block, and it can only be accessed with in  the function or block .

let customerData = function () {
  let name = "Dhruv";
  return `${name} is Logged in.`;
};
let result = console.log(customerData());
