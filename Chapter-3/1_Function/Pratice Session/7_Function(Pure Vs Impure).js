// Pure Function
//-----------------
// The pure function not change the outside value.

let a = 12;
function pureValue() {
  console.log(`hey! It is pure function and the outside value is ${a}`);
}
pureValue();

//Impure Function
//-------------------
//Impure function change the outside value .
let x = 17;
function impureValue() {
  return ++x;
}
console.log(impureValue());
