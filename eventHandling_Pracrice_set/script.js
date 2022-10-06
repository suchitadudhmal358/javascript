document.getElementById("google").addEventListener('click', function(e){
    window.location = "https://www.google.com"
    
})

document.getElementById("fb").addEventListener('click', function(e){
    window.location = "https://www.fb.com"
    
})

document.getElementById("twitter").addEventListener('click', function(e){
    window.location = "https://www.twitter.com"
    
})

setInterval(function(){
    bulb.classList.toggle("bulb")
},300)