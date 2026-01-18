let mySym = Symbol("Good Morning");
const myInfo = {
  userNmae: "mukti prasad dash",
  userAge: 23,
  isLoggedin: true,
  [mySym]: "myKey1",
};
console.log(myInfo[mySym]);
console.log(myInfo);
