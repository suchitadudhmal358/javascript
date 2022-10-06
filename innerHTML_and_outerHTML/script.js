console.log(document.getElementsByTagName("span")[0])  //returns whole span tag
console.dir(document.getElementsByTagName("span")[0]) // returns span as object

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

//innerHtml and outerHTML
let first = document.getElementById("first")
console.log(first.innerHTML)
// console.log(first.innerHTML = "<i>Hey now its itallic</i>")

// console.log(first.outerHTML)
// console.log(first.outerHTML = "<div>Now its div tag</div>")

//textContent - return only text in element
console.log(document.body.textContent)
//another way to get only text
console.log(document.body.firstChild.data)

//change value of hidden attribute to false runtime
first.hidden = false