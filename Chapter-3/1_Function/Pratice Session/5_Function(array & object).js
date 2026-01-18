//Passing the array into the function
//---------------------------------------
let studentMark = [75, 97, 85, 67, 53, 47, 36];
function mark(num) {
  return num[3];
}
let result = console.log(mark(studentMark));

//Passing the object into the function
//---------------------------------------
const userInfo = {
  Name: "Mukti Prasad Dash",
  Age: 23,
  Course: "MERN Stack Development",
  isPaymentdone: true,
};

function handleObject(anyObject) {
  console.log(
    `UserName is ${anyObject.Name} and the user age is ${anyObject.Age} and the user select the ${anyObject.Course} course`
  );
}
let recipt = console.log(handleObject(userInfo));
