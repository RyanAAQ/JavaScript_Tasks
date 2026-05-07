const prompt = require("prompt-sync")();

let minutes = Number(prompt("Enter number of minutes: "));

let remainingMinutes = minutes % 60;
let totalHours = Math.round(minutes / 60);
let remainingHours = totalHours % 24;
let totalDays = Math.round(totalHours / 24);

console.log(`${totalDays} days, ${totalHours} hours, ${remainingMinutes} minutes`);
