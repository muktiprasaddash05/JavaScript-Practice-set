const myInfo = {
  userName: "mukti prasad dash",
  userAge: 23,
  isLoggedin: true,
};
myInfo.greeting = function () {
  return `hello ${this.userName}`;
};
console.log(myInfo.greeting());
