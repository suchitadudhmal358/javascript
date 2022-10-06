// let a = document.getElementsByClassName("container")[0]

// a.onclick = () =>{
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "Hello World!"
// }

//Event Listeners

// let x = function(e) {
// alert("Hello World 1 ")
// }


// let y = function(e) {
//     alert("Hello World 2 ")
// }

// btn.addEventListener('click',x)
// btn.addEventListener('click',y)

// let a = prompt("Enter the number")
// if (a == "2"){
//     btn.removeEventListener('click',x)  
// }

let x = function(e) {
    console.log(e) //return event
    console.log(e.target) //return event target i.e btn
    console.log(e.type) //return event type i.e click
    console.log(e.type, e.clientX, e.clientY) //return event type i.e click and the x and y coordinates of click point    
}

btn.addEventListener('click',x) 