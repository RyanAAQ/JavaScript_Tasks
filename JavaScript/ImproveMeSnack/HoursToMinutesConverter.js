const prompt = require("prompt-sync")();

const converter = (hours) => {
   return hours * 60
}

let hours = Number(prompt("Enter the hours: "))

console.log(`${hours} hours = ${converter(hours)} minutes`)
