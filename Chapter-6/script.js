// Click Event:-
//---------------
let mybtn = document.querySelector("#btn");
mybtn.addEventListener("click", () => {
  alert("Never Give Up");
});

let mygreet = document.querySelector("#greet");
function clickGreet() {
  mygreet.style.color = "yellow";
}
mygreet.addEventListener("click", clickGreet);
mygreet.removeEventListener("click", clickGreet);

// dblClick(Double Click) :-
//----------------------------
let mybtn2 = document.querySelector("#btn2");
mybtn2.addEventListener("dblclick", () => {
  alert("Never Give Up");
});

// input Event:-
//----------------
let inp = document.querySelector("input");
inp.addEventListener("input", function (dets) {
  if (dets.data != null) {
    console.log(dets.data);
  }
});
