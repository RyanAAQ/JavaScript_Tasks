const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "))
let num2 = Number(prompt("Enter second number: "))

let sum = num1 + num2
let twice = sum * 2

console.log("The sum = ", sum, "and twice the value of sum =", twice)

