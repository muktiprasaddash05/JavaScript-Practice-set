// Add the element begining of an array (or) unshift() method : 
//------------------------------------------------------------------

// (A) adding one element to the array:-
//----------------------------------------
const rootVegetables = ["Carrot", "Potato", "Radish", "Turnip", "Beetroot"];
const newRootVegetable = rootVegetables.unshift("Pumpkin")
console.log(newRootVegetable)
console.log(rootVegetables)

console.log("----------------------------------------------------------------------------")

// (A) adding multiple  element to the array:-
//----------------------------------------
const companyBranches = ["Mumbai", "Delhi", "Bangalore", "Hyderabad"];
const newCompanyBranches = companyBranches.unshift("Odisha", "Punjab", "Chennai")
console.log(newCompanyBranches)
console.log(companyBranches)