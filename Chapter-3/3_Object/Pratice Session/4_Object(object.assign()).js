// object.assign()
//------------------
// object.assign() is used to copy properties from one or more object into a target object.
//syntax:- object.assign({}, obj1, obj2,........)

//Example:-
let college = {
  instituteName: "GIET",
  yearOfInstitute: 25,
  state: "Bhubneswar",
};

let student = {
  name: "Shreyas",
  age: 24,
  rollno: "23MCA029",
  isMcastudent: false,
};

let combineObject = Object.assign({ coursefees: 1000000 }, college, student);
let anotherObject = Object.assign({}, college, student);
console.log(combineObject);
console.log(anotherObject);
