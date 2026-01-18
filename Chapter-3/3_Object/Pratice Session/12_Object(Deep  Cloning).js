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

let obj2 = JSON.parse(JSON.stringify(myDeatails)); // deep cloning
console.log(obj2)