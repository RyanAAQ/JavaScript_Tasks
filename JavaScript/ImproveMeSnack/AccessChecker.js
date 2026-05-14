const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "))

let access = (age >= 18) ? "Access Granted" : "Access Denied"

console.log(access)

