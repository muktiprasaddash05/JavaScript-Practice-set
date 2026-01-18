//for...of loop :-
//-------------------

//Example:1 < for...of loop using on array >

const animalCollection = ["cow", "dog", "elephant", "mouse", "lion"];
for (let i of animalCollection) {
  console.log(i);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


//Example:2
const evenNum = [2, 4, 6, 8, 10];
for (let i of evenNum) {
  console.log(i*i);
}


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


//Example:3 < for...of using string >
const user = "Mukti Prasad Dash";
for (const word of user) {
  console.log(word);
}


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


//Example:4 < for...of using array of object >
const courseData = [
  { name: "JavaScript", price: 750 },
  { name: "React", price: 900 },
  { name: "node & express js", price: 1200 },
];
for (let result of courseData) {
  console.log(`${result.name} price is ${result.price}`);
}


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");



//Example:5 < for...of loop using "map"> // doubt 
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("fr", "france");
map.set("IN", "India");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Example:5 <using break>
let numbers = [17, 5, 23, 94, 77, 53, 84];
for (let i of numbers) {
  if (numbers[i] === 23) {
    break;
  }
  console.log(i, ":", numbers[i]);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

//Example:5 <using continue>
let num = [17, 5, 23, 94, 77, 53, 84];
for (let i of num) {
  if (num[i] === 23) {
    continue;
  }
  console.log(i, ":", num[i]);
}
