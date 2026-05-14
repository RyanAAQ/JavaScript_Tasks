const prompt = require("prompt-sync")();

const numberChecker = (number)=>{

    if(number == 0){
        return "Number is exactly 0"
    }
    else if(number > 0){
        return "Number is positive"  
    }
    else if(number < 0){
        return "Number is negative"
    }
}

let number = Number(prompt("Enter a number: "))

console.log(numberChecker(number))
