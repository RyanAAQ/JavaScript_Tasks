const prompt = require("prompt-sync")();

let input = Number(prompt("Enter a number: "))

let remainder = input % 10
let value = remainder + input

console.log("The answer = ", value)



