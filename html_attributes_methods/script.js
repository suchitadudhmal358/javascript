let first = document.getElementById("first")

console.log(first.getAttribute("class")) //returns classes
console.log(first.hasAttribute("class")) //check weather this attribute is present or not
console.log(first.hasAttribute("style"))
// console.log(first.setAttribute("hidden","true")) //set attribute to tag

console.log(first.setAttribute("class","box bigBox"))

console.log(first.removeAttribute("class")) //removes attributes

//create your own attribute using data-* and use it by using dataset
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)