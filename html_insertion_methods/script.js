let a = document.getElementsByTagName("div")[0]

//1st method of insertion
// a.innerHTML = a.innerHTML + '<h1>Hello World</h1>'

let div = document.createElement("div")
div.innerHTML = '<h1>Hello World</h1>'
// a.appendChild(div)
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
a.replaceWith(div)