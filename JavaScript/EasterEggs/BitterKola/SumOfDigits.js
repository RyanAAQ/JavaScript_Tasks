const prompt = require("prompt-sync")();

let number = prompt("Enter a five digit number: ");

let firstDigit = Math.round(number / 10000);
let lastDigit = number % 10;
let sum = firstDigit + lastDigit;

console.log("The sum of the first and last digit is", sum);
