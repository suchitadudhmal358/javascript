const students = [
    {name: "suchita", subject : "JavaScript"},
    {name: "dinesh", subject : "ReactJs"}
]

function enrolledStudent(student){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            students.push(student);
            console.log("Student has been enrolled")

            const error = false
            if(!error){
                resolve()
            }
            else{
                reject()
            }
        },1000)
    })
}

function getStudents(){
    setTimeout(function(){
        let str = ""
        students.forEach(function(student){
            str = `<li>${student.name}</li>`
            document.getElementById("students").innerHTML = str
            console.log("Student have been fetched")
        })

    },5000)
}


let newStudent = {name: "prajwal", subject: "python"}
enrolledStudent(newStudent).then(getStudents).catch(function(){
    console.log("error occured!")
})