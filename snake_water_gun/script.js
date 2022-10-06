let user = prompt("Enter S for Snake,W for Water or G for Gun")

let cpuInput = Math.floor(Math.random() * 3 )

let cpu = ["S", "W", "G"][cpuInput]

const match = (cpu, user) =>{
    if(cpu === user){
        return "Nobody"
    }

    else if (cpu === "S" && user === "W"){
        return "CPU"
    }
    else if (cpu === "S" && user === "G"){
        return "User"
    }

    else if (cpu === "W" && user === "S"){
        return "User"
    }
    else if (cpu === "W" && user === "G"){
        return "CPU"
    }

    else if (cpu === "G" && user === "W"){
        return "User"
    }
    else if (cpu === "G" && user === "S"){
        return "CPU"
    }
}

let result = match(cpu, user)
document.write(`CPU : ${cpu} <br> User : ${user} <br> The winner is : ${result}`)