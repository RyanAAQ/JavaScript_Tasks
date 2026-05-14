const prompt = require("prompt-sync")();

const account = (username, password)=>{
    
    if((password.length >= 8) && (username.length >= 8)){
        return "Successfully logged in"
    }

    else if(password.length < 8){
        return "Invalid password"
    }
    
    else if(username.length < 8){
        return "Invalid username"
    }
}
let username = String(prompt("Enter your username: "))
let password = String(prompt("Enter your password: "))

console.log(account(username, password))
