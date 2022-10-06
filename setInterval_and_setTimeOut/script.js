//setTimeout

// setTimeout(function(){
//     alert("Hii,I am inside setTimeout")
// },5000);
 
//--------------------------//---------------------

// let a = setTimeout(function(){
//     alert("Hii,I am inside setTimeout")
// },5000);  //a returns timeID
// let b = prompt("Do you want to run settimeout?")
//  if ("n" == b){
//      clearTimeout(a)
//  }
//  console.log(a)

//--------------------------//---------------------

//setTimeout with  arguments : func, delay, arg1,arg2

const sum = ((a, b ,c) =>{
    console.log("yes, I am running " + (a + b + c))
})

setTimeout(sum, 5000, 2, 5, 8)

//let a = setInterval(function() {
//     alert("setInterval is running after every 3s")
// }, 3000);
// clearInterval(a)



