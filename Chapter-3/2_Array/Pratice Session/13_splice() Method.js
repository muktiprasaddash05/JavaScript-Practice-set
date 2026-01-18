//splice method() :
//----------------------

//Example:1 <Remove Element>
//---------------------------- 
const departmentNames = ["HR", "Marketing", "Engineering", "Finance"];
const removeDepartments = departmentNames.splice(1,2)
console.log(removeDepartments)
console.log(departmentNames)


//Example:2 <Add Element> 
//-----------------------
let animals = ['dog', 'cat', 'cow', 'mouse', 'tiger']
let addAnimals = animals.splice(1,1, "lion", "camel")
console.log(animals)
console.log(addAnimals)


//Example:2 <Replace Element> 
//-----------------------------
let fruits = ['apple', 'mango', 'banana']
let replaceFruits = (1,1, "orange")
console.log(fruits)
console.log(replaceFruits)