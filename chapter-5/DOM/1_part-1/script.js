// dom in js < SELECTING THE ELEMENT >
//-----------
// Selecting the element (getElementByid, getelementByTagname,getElementsByClassName,querySelector,querySelectorAll)

// 1) getElementById
//-----------------------
//getElementById() is a JavaScript method used to retrieve a specific HTML element by its unique id attribute.
//syntax:-
let para = document.getElementById("story2");
console.log(para);

// 2) getelementByTagname
//-------------------------
//getElementsByTagName() is a JavaScript method used to retrieve a live HTMLCollection of elements with a specified tag name from the DOM. It is available on both the Document and Element interfaces.
let pic = document.getElementsByTagName("img");
console.log(pic);

// 3) getElementsByClassName
//----------------------------
// The getElementsByClassName() method returns a live HTMLCollection of all elements in the document (or a specific element) that have the specified class name(s).
let myClass = document.getElementsByClassName("list");
console.log(myClass);

// 4) querySelector()
//---------------------
//The querySelector method is a JavaScript web API used to select the first element within the document that matches a specified CSS selector.
let cont = document.querySelector(".country");
console.log(cont);

// 5) querySelectorAll()
//-----------------------
//querySelectorAll() is a JavaScript method used to select all elements in the document (or within a specific element) that match one or more CSS selectors.  It returns a static NodeList — a collection of matching elements that can be accessed like an array
let contlist = document.querySelectorAll(".list");
console.log(contlist);

//=============================================================================
//                 < Changing the HTML >

//Changing the HTML (innerHTML, textcontent,innerText, attribute, document.write)
let heading = document.querySelector("#headline");
heading.innerHTML = "<i>THALA FOR A RESON</i>";
console.log(heading);

let anotherpara = document.querySelector("p");
anotherpara.textContent =
  "MS Dhoni is a legendary Indian cricketer known for his calm demeanor, exceptional batting, and wicketkeeping skills.  Born on July 7, 1981, in Ranchi, Jharkhand, Dhoni rose from humble beginnings—his father worked as a pump operator, and he once worked as a ticket collector for Indian Railways—to become one of the most successful captains in cricket history.";
console.log(anotherpara);

let listItem = document.querySelectorAll(".list");
listItem[0].textContent = "THALA";
listItem[1].innerHTML = "MSD";
listItem[2].innerText = "DHONI";
listItem[3].textContent = "Captain Cool";
console.log(listItem);

//changing the attribute of a html
let changePic = document.querySelector("img");
changePic.src =
  "https://w0.peakpx.com/wallpaper/698/322/HD-wallpaper-ms-dhoni-captain-cool-circket-mahendra-singh-dhoni.jpg";
console.log(changePic);

//document.write()
//-----------------
//In JavaScript, document.write() can be used to write directly to the HTML output stream:
console.log(document.write(Date()));

//=============================================================================
//                 < Changing the Style / chaning the css >

let myBackground = document.querySelector("body");
myBackground.style.backgroundColor = "green"
console.log(myBackground)