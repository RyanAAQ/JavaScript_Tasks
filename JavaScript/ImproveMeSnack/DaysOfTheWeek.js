const prompt = require("prompt-sync")();

let day = String(prompt("Enter any day: "))

switch (day.toLowerCase()){
    
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${day} is a weekday`)
    break;
      
    case "saturday":
    case "sunday":
        console.log(`${day} is a weekend`)
    break;
}

