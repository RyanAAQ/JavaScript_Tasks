const prompt = require("prompt-sync")();

let input = Number(prompt("Enter a number: "))

if(input > 0){
console.log("Number is positive")
}
else if(input < 0){
console.log("Number is negative")
}
else{
console.log("Number = 0")
}
