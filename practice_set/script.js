// change color of first element of navbar to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// change color of first & last element of navbar to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// change background color of all li element of navbar to red
Array.from(document.getElementsByTagName("li")) // converts html collection to array
.forEach((element) => {
    element.style.background = "red";
  })
