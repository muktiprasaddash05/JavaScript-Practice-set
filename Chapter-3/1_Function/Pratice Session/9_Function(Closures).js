// closures in js :-
//---------------------
function outerFunvtion() {
  let name = "Harray Poter";

  function innerFunction() {
    const website = "jio Hotstar";
    return `${name} is the best Web-Series. Please watch this web-series.`;
  }

  console.log(innerFunction());
}
outerFunvtion();

// Example: 2
//---------------
if (true) {
  const userName = "mukti";
  if (userName === "mukti") {
    const website = " youtube";
    console.log(userName + website);
  }
}
