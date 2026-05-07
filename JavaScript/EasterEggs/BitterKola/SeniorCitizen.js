const prompt = require("prompt-sync")();

let birthYear = Number(prompt("Enter your birth year: "));
let year = Number(prompt("Enter the current year: "));

let age = year - birthYear;
if (age >= 65)
console.log("You are eligible for the senior citizen discount");
