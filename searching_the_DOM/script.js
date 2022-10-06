//1. getElementById() - select element by its id
let ctitle = document.getElementById("card1");
ctitle.style.color = "red";

//2. querySelectorAll() - select all elements  which having the given class or id(or any css-selector)
let cardTitles = document.querySelectorAll(".card-title");
console.log(cardTitles);
// change color of each card-title using index
cardTitles[0].style.color = "blue";
cardTitles[1].style.color = "green";
cardTitles[2].style.color = "orange";

//3. querySelector() - returns a single element (first element if more having same class) which having the given class or id(or any css-selector)
document.querySelector(".first-card-btn").style.color = "yellow";
document.querySelector(".first-card-btn").style.background = "red";

//4. getElementsByTagName() - returns elements by tag
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a")); //return a tag in card class

//5. getElementsByClassName() -returns elements by class name
console.log(document.getElementsByClassName("card-body"));

//5. getElementsByName() -returns elements by class name
console.log(document.getElementsByName("search"));
