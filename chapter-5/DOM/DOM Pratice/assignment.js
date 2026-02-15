// Q:1 select the heading of a page by ID and change its text to "Welcome to Code & Caffiene"
let myHeading = document.querySelector("#heading");
myHeading.innerHTML = "<i>Welcome to Code & Caffiene</i>";

// Q:2 select all <li> elements and print their text using a loop.
let myList = document.querySelectorAll(".parent li");
console.log(myList);
myList.forEach((a) => {
  console.log(a.innerHTML);
});

//Q.3 Select a paragraph and replace its content with:- <b>Udated By Jaavascript</b>
const newWord = document.querySelector("#word");
console.log(newWord);
let myupdateedSentece = (newWord.innerHTML = "<b> Updtaed By Javascript </b>");
console.log(myupdateedSentece);

// Q.4 How do you get the src of an image using Javascript
let myImg = document.querySelector("img");
console.log(myImg);
const getAddress = myImg.getAttribute("src");
const altText = myImg.getAttribute("alt");
console.log(altText);
console.log(getAddress);

//Q.5 select a link and update it's href "www.goggle.com"
let updatelink = document.querySelector("a");
console.log(updatelink);
updatelink.setAttribute("href", "https://www.google.com");

// Q.6 Add a Title Attribute to a div Dynamically.
const story = document.querySelector("#storypara");
console.log(story);
story.setAttribute("title", "Good Story");

//Remove the  Disabled attribute from a button.

