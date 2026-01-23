//            DOM < Document Object Model > IN JavaScript
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//                  < SELECTING THE ELEMENT >
//---------------------------------------------------------------------------
// Selecting the element (getElementByid, getelementByTagname,getElementsByClassName,querySelector,querySelectorAll)

// 1) getElementById
//-----------------------
let para = document.getElementById("story2");
console.log(para);

// 2) getelementByTagname
//-------------------------
let pic = document.getElementsByTagName("img");
console.log(pic);

// 3) getElementsByClassName
//----------------------------
let myClass = document.getElementsByClassName("list");
console.log(myClass);

// 4) querySelector()
//---------------------
let cont = document.querySelector(".country");
console.log(cont);

// 5) querySelectorAll()
//-----------------------
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
console.log(document.write(Date()));

//=============================================================================
//                 < Changing the Style / chaning the css >

let myBackground = document.querySelector("body");
myBackground.style.backgroundColor = "black";
console.log(myBackground);

let myImage = document.querySelector("img");
myImage.style.borderRadius = "16px";
console.log(myImage);

//=================================================================================

//              < Chnanging the attribute >
// getattribute, setattribute, removeattribute,

let heading1 = document.querySelector("h1");
let att = heading1.getAttribute("class"); // getattribute
let stt = heading1.setAttribute("style", "color:red"); // setattribute and add style
console.log(heading1.removeAttribute("class")); // remove the attribute

//==================================================================================

//            < add, remove, toggle classlist >
let latPara = document.querySelector("#pp");
let repara = latPara.classList.remove("mylastpara");
let adpara = latPara.classList.add("mylastpara");
let topara = latPara.classList.toggle("mylastpara");

//================================================================================

//                 < Dynamic DOM Manipulation >
//< Method > :-
//=================
//createElement(), createTextNode(), append(), prepend(), insertBefore(), remove()

//createElement(), append() :-
//---------------------------------
let mysecondHeading = document.createElement("h1");
mysecondHeading.innerHTML = "The King Kohali";
mysecondHeading.classList.add("virat");
document.querySelector("body").append(mysecondHeading);

//createTextNode(), prepend():-
//----------------------------------
let textLetter = document.createTextNode("hello Good morning");
document.body.prepend(textLetter);

// insertBefore() :-
//---------------------
let myseondsuperHeading = document.createElement("h1");
myseondsuperHeading.innerHTML = "Village Story";

let parent = document.querySelector("#box");
let refchild = document.querySelector("#mysecondsuperPara");

parent.insertBefore(myseondsuperHeading, refchild);

// remove()
//-----------
let myremoveheading = document.querySelector(".virat");
myremoveheading.remove();



//< Property >
//================
//firstChild, lastChild Property, firstElementChild, lastElementChild
