//Adding element  in an array (or) push() method
//--------------------------------------------------


// (A) adding one element to the array:-
//----------------------------------------
let topicsToLearn = ["HTML", "CSS", "JavaScript", "React"]
let newTopicAdd = topicsToLearn.push(" Node js ")
console.log(newTopicAdd) //5
console.log(topicsToLearn) // [ 'HTML', 'CSS', 'JavaScript', 'React', ' Node js ' ]


console.log("------------------------------------------------------------------------------")


// (b) adding multiple element to the array:-
//-----------------------------------------------
const evenNum = [2, 4, 6, 8, 10]
const newEvenNum = evenNum.push(12, 14, 16, 18, 20)
console.log(newEvenNum)
console.log(evenNum)