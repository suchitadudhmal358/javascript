let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 2000);
})

p1.then(() =>{
    console.log("Congratulations!!")
})

p1.then(() =>{
    console.log("Suchita")
})

p1.then(() =>{
    console.log("Your promise has been resolved")
})
