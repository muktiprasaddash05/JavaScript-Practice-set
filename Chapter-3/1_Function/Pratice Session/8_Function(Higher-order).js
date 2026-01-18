// Higher-order Function
//------------------------
// higher order function wo function hota hai jo ki return kare ek or function yaa fir accept kare ek function apne parameter main.

// Passing a function into a parameter
//---------------------------------------
function customerId(val) {
  console.log("It is Customer id data.");

  // yahan dusra function call ho raha hai
  val();
}

customerId(function anotherrId() {
  console.log("hey it is another customer id");
});

// Passing function into a return value
//----------------------------------------
function abcd() {
  return function () {
    console.log("good");
  };
}
abcd()();
