// Promose class methods

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1")
    }, 1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 2")
        // reject(new Error("error"))
    }, 2000);
})


let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})

//Promise.all() - wait for all promises to resolve and the shows result
let promise_all = Promise.all([p1, p2, p3])
promise_all.then((value)=>{
    console.log(value) //it takes 3000 ms to show the result
}) // o/p - ['Value 1', 'Value 2', 'Value 3']

//Promise.allSetteled() - shows state(fulfilled or rejected) and value of all promises

let promise_allSettled = Promise.allSettled([p1, p2, p3])
promise_allSettled.then((value)=>{
    console.log(value) 
})

// o/p
    // (3) [{…}, {…}, {…}]
    // 0: {status: 'fulfilled', value: 'Value 1'}
    // 1: {status: 'rejected', reason: Error at http://127.0.0.1:5500/promiseAPI.js:12:16}
    // 2: {status: 'fulfilled', value: 'Value 3'}
    // length: 3


//Promise.race() - shows result of promise that resolved in less time
let promise_race = Promise.race([p1, p2, p3])
promise_race.then((value)=>{
    console.log(value) //o/p : value 1 
})

//Promise.any() - shows result of promise that resolved in less time if rejected promise takes less time then it will choose another resolved promise that have less time
let promise_any = Promise.any([p1, p2, p3]) 
promise_any.then((value)=>{
    console.log(value) //o/p : value 3 if promise 1 has 1100 ms
})

let promiseResolved = Promise.resolve(2)
let promiseReject = Promise.reject(2)