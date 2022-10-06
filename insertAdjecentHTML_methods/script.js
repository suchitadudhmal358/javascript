//insertAdjecentHTML, insertAdjecentElement, insertAdjecentText

let first = document.getElementById("first");

first.insertAdjacentHTML('beforebegin', '<div class ="test">beorebegin</div>');
first.insertAdjacentHTML('beforeend', '<div>beforeend</div>')
first.insertAdjacentHTML('afterbegin', '<div>afterbegin</div>')
first.insertAdjacentHTML('afterend', '<div>afterend</div>')

//node remove method
first.remove()