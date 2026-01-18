//IIFE :-
//------------
// It is a function in javascript that runs as soon as it is defined.

//++++++++++++++++++++ < Why Use IIFE > +++++++++++++++++++++++++++++++++
// i)Avoid polluting global scope
// ii)data Privacy / Escaplution
// iii)initiallize code immediately

(function sayHello() {
  console.log("Good Morning Guys");
})();

((name) => {
  console.log(`${name}! you are conected`);
})("Mukti Prasad");
