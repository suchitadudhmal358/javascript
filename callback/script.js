function loadScript(src, callback){
    var script = document.createElement("script")
    script.src = src;

    script.onload= function(){
        console.log(src)
        callback(null, src);
    }

    script.onerror = function(){
        console.log("Error loading script with src : " + src)
        callback(new Error( "src got some error : "+ src))
    }

   

    document.body.appendChild(script)


}

function hello(error, src){
    if(error){
        console.log(error)
        return
    }
    alert("Hello" + src)

}

function goodmorning(){
    alert("goodmorning")
}



loadScript("https://cdn.jsderlivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",hello)