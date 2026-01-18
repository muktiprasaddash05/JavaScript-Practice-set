// normal Object  destructuring
let user1 = {
  name: "mukti prasad dash",
  gender: "male",
  age: 22,
  area: "Ganjam",
  class: "mca",
};

const { gender, area } = user1;
console.log(gender);
console.log(area);


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


//Nested Object destructuring
const employee ={
  Name: "Mukti Prasad Dash",
  address:{
    city:"bangalore",
    state:"Karnatak"
  }
}

const{address:{city,state}} =employee
console.log(city)
console.log(state)