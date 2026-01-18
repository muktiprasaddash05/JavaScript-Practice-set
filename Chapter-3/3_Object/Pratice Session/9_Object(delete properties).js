const avengers = {
  movieName: "the end game",
  "cast-name": "Robert Downey Jr.",
  price: 500,
  rating: "9.0 / 10.0",
  audio: ["English", "Hindi", "Telugu", "Tamil"],
  isActionmovie: true,
};

// delete the property of an object
delete avengers.rating;
console.log(avengers);
