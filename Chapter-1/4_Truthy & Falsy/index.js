// Truthy and Falsy Value
//-------------------------
//Falsy Value : - 0, null, undeifined, " ", NaN, document.all
//Truthy Value :- Rest of all are Truthy Value.

let userValue = Boolean(0);

let userValue1 = Boolean(100);

let userValue2 = Boolean(null);

let userValue3 = Boolean(undefined);

let userValue4 = Boolean(NaN);

let userValue5 = Boolean(""); //without sapce

let userValue6 = Boolean("Mukti Prasad Dash"); //space between two colomn

let userValue7 = Boolean(17); // any numbers

let userValue8 = Boolean(-0);

console.table([
  userValue,
  userValue1,
  userValue2,
  userValue3,
  userValue4,
  userValue5,
  userValue6,
  userValue7,
  userValue8,
]);
