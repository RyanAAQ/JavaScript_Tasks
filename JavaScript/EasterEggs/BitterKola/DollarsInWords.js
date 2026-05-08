const prompt = require("prompt-sync")();

let dollars = Number(prompt("Enter Dollars amount (1 - 10): "));

if(dollars == 1){
console.log(`$${dollars} = One Dollar`);
}
else if(dollars == 2){
console.log(`$${dollars} = Two Dollars`);
}
else if(dollars == 3){
console.log(`$${dollars} = Three Dollars`);
}
else if(dollars == 4){
console.log(`$${dollars} = Four Dollars`);
}
else if(dollars == 5){
console.log(`$${dollars} = Five Dollars`);
}
else if(dollars == 6){
console.log(`$${dollars} = Six Dollars`);
}
else if(dollars == 7){
console.log(`$${dollars} = Seven Dollars`);
}
else if(dollars == 8){
console.log(`$${dollars} = Eight Dollars`);
}
else if(dollars == 9){
console.log(`$${dollars} = Nine Dollars`);
}
else if(dollars == 10){
console.log(`$${dollars} = Ten Dollars`);
}
else{
console.log("Invalid amount")
}
