const user = {
  userName: "Mukti Prasad",
  Age: 23,
  welcomeMessage:  () => {
    console.log(` Welcome! ${this.userName} and your age is ${this.Age}`);
    console.log(this);
  },
};
user.welcomeMessage();

