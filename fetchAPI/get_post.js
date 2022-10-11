
//GET request using fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    let li = `<tr><th>Name</th><th>Email</th></tr>`

    data.forEach(user => {
        li += `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        </tr>`
        
    });

    document.getElementById("users").innerHTML = li
} )

//POST request using fetch

parameter = {
    method : 'POST',
    headers : {
        'Content-type' :'application/json'
    },

    body : JSON.stringify( {

        //stringify converts json object to string
        title : 'abc',
        body : 'bar',
        userID : 1
    })
}
fetch("https://jsonplaceholder.typicode.com/users", parameter)
.then(response => response.json())
.then(data => console.log(data))