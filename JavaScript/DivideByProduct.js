const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "))
let x = a + 10
let y = a - 10
let z = a % 10

let answer = a / x * y * z

console.log("The answer = ", answer)



