//JSON.strngify() Method
//----------------------------
//Example:1 < object to json string>
//------------------------------------

let person = {
  name: "mukti prasad dash",
  class: "MCA"
}
let result = JSON.stringify(person)
console.log(result)
console.log(person)

console.log("----------------------------------------------------------------------------")

//Example:2 <Array to JSON string>
//-----------------------------------
const rootVegetables = ["Carrot", "Potato", "Radish", "Turnip", "Beetroot"];
let jsonVegetable = JSON.stringify(rootVegetables);
console.log(rootVegetables);
console.log(jsonVegetable)


console.log("----------------------------------------------------------------------------")

//Example:3 <nested object  to JSON string>
//-----------------------------------
let students = {
  name: "mukti prasad",
  marks: {
    math:80,
    science:90
  }
}
console.log(JSON.stringify(students))