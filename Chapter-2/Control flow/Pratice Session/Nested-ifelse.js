let time = parseInt(prompt("enter your time ")) // time in 24-hour format (7.5 means 7:30 AM)
console.log(`The user time is ${time}`)

if (time < 6) {
  console.log("Too early... keep sleeping 😴");
} else if (time >= 6 && time < 7) {
  console.log("Wake up! Do some stretching 🧘‍♂️");
} else if (time >= 7 && time < 8) {
  console.log("Freshen up and eat breakfast 🍳");
} else if (time >= 8 && time < 9) {
  console.log("Get ready for work/school 🧥📚");
} else if (time >= 9 && time < 13) {
  console.log("Work/study time! Stay focused 💻📖");
} else if (time >= 13 && time < 14) {
  console.log("Lunch time! Eat something healthy 🍱");
} else if (time >= 14 && time < 18) {
  console.log("Work/study time! Stay focused 💻📖");
} else {
  console.log("Routine continues with the rest of the day...");
}




//exapmle-2
//------------------------
let number = Number(prompt("enter Your Number"));

if (number < 0) {
  console.log("Negative number");
} else if (number === 0) {
  console.log("Zero");
} else {
  console.log("Positive number");
}
