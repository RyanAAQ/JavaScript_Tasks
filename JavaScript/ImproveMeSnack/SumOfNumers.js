const prompt = require("prompt-sync")();

const add = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}

let numberOne = Number(prompt("Enter the first number: "))
let numberTwo = Number(prompt("Enter the second number: "))

console.log(`${numberOne} + ${numberTwo} = ${add(numberOne, numberTwo)}`)
