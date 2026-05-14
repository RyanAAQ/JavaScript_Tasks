const prompt = require("prompt-sync")();

const greetUser = (name)=>{
    return (`Hello ${name}!!`)
}

let name = String(prompt("Enter Your name: "))

console.log(greetUser(name))
