const prompt = require("prompt-sync")();

console.log("1. Water (#100)\n2. Juice (#200)\n3. Soda (#150)\n4. Snack (#300)");
let productNumber = Number(prompt("Enter product Number: "));
let price = Number(prompt("Enter amount: "));

let amount;

if (productNumber == 1){
amount = 100;
}
else if (productNumber == 2){
amount = 200;
}
else if (productNumber == 3){
amount = 150;
}
else if (productNumber == 4){
amount = 300;
}
else{
console.log("Invalid product code");
}

if (price >= amount){
let change = price - amount;
console.log("Your change is", change);
}
else{
console.log("Insufficient Amount");
}

