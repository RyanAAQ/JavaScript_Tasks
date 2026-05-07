const prompt = require("prompt-sync")();

let price = Number(prompt("Enter price: "));
let discount = Number(prompt("Enter discount percentage: "));

let amount = price * discount / 100;
let finalPrice = price - amount;

console.log("The final price is", finalPrice)
