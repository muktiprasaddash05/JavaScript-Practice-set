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

console.log(myDeatails?.PermanentArea?.CurrentAddres) // optional chaining 