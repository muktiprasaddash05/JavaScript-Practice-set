// spread operator
//------------------
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

let result = { ...college, ...student };
console.log(result);
