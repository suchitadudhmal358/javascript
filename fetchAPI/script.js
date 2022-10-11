//get()
console.log("hello")
let myBtn = document.getElementById("myBtn")
let content = document.getElementById("content")


//reading txt file
// function getData(){
//     console.log("started getData")
//     url = "content.txt"
//     fetch(url).then((response)=>{
//         console.log("first then")
//         return response.text(); //return data as text
//     }).then((data)=>{
        
//         console.log("second then")
//         console.log(data)
//     }
//     )
// }

//getting data from website
function getData(){
    
    url = "https://api.github.com/users"
    fetch(url).then((response)=>{
      
        return response.json(); //return data as object
    }).then((data)=>{
        
        
        console.log(data)
    }
    )
}

// console.log("before getData")
getData()
// console.log("after getData")


//post method

function postData(){
    
    url = "http://dummy.restapiexample.com/create"
    data = {"name":"suchita","salary":"123","age":"23"}

    params = {
        method : 'post',
        headers : {
            'Content-type' : 'application/json'
        },
        body : data
    }

    fetch(url, params).then(response => response.json())
    .then(data=>console.log(data))
}

postData()