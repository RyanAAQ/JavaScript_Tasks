const prompt = require("prompt-sync")();

let number = prompt("Enter number: ");
let squareRoot = number ** 0.5;

if(squareRoot === Math.round(squareRootOfNumber))
console.log("It is a perfect square");
else
console.log("It is not a perfect square");
