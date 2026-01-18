//Nested Object
const myDeatails = {
  Name: "Mukti Prasad Dash",
  Age: 22,
  Nationlity: "Indian",
  Gender: "Male",
  PermanentArea: {
    Village: "balia",
    Post: "K.N.PUR",
    District: "Ganjam",
    pin: 761019,
    CurrentAddress: {
      State: "Karnatak",
      city: "Bangalore",
      isEmployee: true,
    },
  },
};

//Access the Nested Object
console.log(myDeatails.PermanentArea.District);
console.log(myDeatails.PermanentArea.CurrentAddress.isEmployee);

//Update the nested object
myDeatails.PermanentArea.CurrentAddress.isEmployee = false;
console.log(myDeatails);

//Add the value in the Nested Object 
myDeatails.PermanentArea.isvillagePeople = true
console.log(myDeatails)