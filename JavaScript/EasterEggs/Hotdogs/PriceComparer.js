const prompt = require("prompt-sync")();

let firstPrice = Number(prompt("Enter price of first package of rice: "));
let firstWeight = Number(prompt("Enter weight of first package of rice: "));
let secondPrice = Number(prompt("Enter price of second package of rice: "));
let secondWeight = Number(prompt("Enter weight of second package of rice: "));

if ((firstPrice / firstWeight) < (secondPrice / secondWeight))
console.log("First package has a better price per unit weight");
else
console.log("The second package has a better price per unit weight");
