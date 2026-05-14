const prompt = require("prompt-sync")();

let light = String(prompt("Enter Colour: "))

switch(light.toLowerCase()){

     case "red":
        console.log("Stop")
     break;
        
     case "yellow":
        console.log("Get Ready")
     break;
        
     case "green":
        console.log("Go")
     break;
     
     default:
        console.log("invalid colour")

}
