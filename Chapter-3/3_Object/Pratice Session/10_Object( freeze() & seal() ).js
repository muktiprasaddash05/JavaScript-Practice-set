//object.seal()
//----------------
// i) we can't add new property to an object.
// ii) we can delete any property to an object.
// iii) we can change the existing value .

const animal = {
  name: "jacky",
  color: "white",
  age: 1,
  food: ["milk", "fish", "rice", "meat"],
};
let a = Object.seal(animal);
animal.isloggedin = true; // we can't add beacuse animal is seal
console.log(animal);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//object.freeze() :-
//--------------------
// In the object.freeze() we cant add, delete, & change the existing value in the object .

const jsUser = {
  first_Name: "Mukti Prasad Dash",
  Age: 23,
  Email: "muktiprasad@gmail.com",
  isLoggedIn: true,
  loggedInDays: ["monday", "Wednesday"],
};

let b = Object.freeze(jsUser);
jsUser.Age = 18;
console.log(jsUser);
