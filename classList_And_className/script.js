// classList() , className attribute

let first = document.getElementById("first")

first.classList //returns all classes : DOMTokenList(2) ['yellow', 'text-dark', value: 'yellow text-dark']

first.className
// 'yellow text-dark'

first.className = "red text-dark" //change the class to red and text-dark

first.classList.add("text-dark") //to add classes

first.classList.remove("red") //to remove classes

first.classList.toggle("yellow") //add class if doesn't exist and remove if exist

first.classList.contains("red") //check for the class given class
//returns true or false












