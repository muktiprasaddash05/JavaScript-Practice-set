// Math.random() :- 
//=====================================
// 🔹 Definition:
// Math.random() returns a random decimal number between 0 (inclusive) and 1 (exclusive).

// 👉 It means: the result will be 0 or more, but less than 1

// 🧠 Easy Interview Line:
// ➡️ "Math.random() is used to generate a random number between 0 and 1` (not including 1)."

//Example:-1 (Random Number Between 1 to 10)
 let num = Math.floor(Math.random()*10)+1 
 console.log(num)

//Example:-2 (Random Number Between 100 to 500)
let randomNumber = Math.floor(Math.random()*401)+100 
 console.log(randomNumber)


//Example:3 (Simulate a coin Toss)
 let coinToss = Math.floor(Math.random()< 0.5 ) ? "heads" : "tails" ;
 console.log(coinToss)

if(Math.random()< 0.5){
  console.log("Head")
}else{
  console.log('Tail')
}
