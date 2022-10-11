//promise

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = false
            if(!error){
                console.log("Function : promise has been resolved")
                resolve()
            }

            else{
                console.log("Function : promise has not been resolved")
                reject("Sorry ! error occured")
            }
        },1000)
    })
}

func1().then(function(){
    console.log("thanks for resolving")
}).catch(function(error){
    console.log("very bad ! " + error)
})