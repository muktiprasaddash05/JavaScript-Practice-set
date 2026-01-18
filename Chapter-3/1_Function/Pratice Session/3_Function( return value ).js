//Return value :-
//------------------
// A return value means the function send back a result that you can use latter.

//Example:1
//----------------
let userInfo = function (name) {
  return `Hey! Good Morning ${name}`;
};
let userData = console.log(userInfo("Mukti Prasad Dash"));

//Example:2
//-------------
function add (num1, num2) {
  return num1+num2
}
let result = console.log(add(3,4))

//Example:3
//------------
let superHero = function () {
  return 5;
}
let superHeroResult = console.log(superHero())
