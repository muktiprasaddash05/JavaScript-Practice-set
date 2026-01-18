// ✅ Q1: Print numbers from 1 to 5
for(let i = 1 ; i<=5; i++){
  console.log(i)
}

console.log("*****************************************")

//✅ Q2: Print even numbers from 2 to 10

for(j = 2 ; j<=10 ; j++){
  if(j % 2 === 0){    // divisible by 2 
    console.log(j)
  }
}

console.log("*****************************************")


//✅ Q3: Print odd numbers from 2 to 10

for(k = 2 ; k<=10 ; k++){
  if(k % 2 === 1){    // divisible by 2 
    console.log(k)
  }
}

console.log("*****************************************")

// ✅ Q4: Print squares of numbers from 1 to 5
for(l=1 ; l<=5 ; l++) {
  console.log(l*l);
}

console.log("*****************************************")

//✅ Q5: Print each character of a string
let name = "India";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
