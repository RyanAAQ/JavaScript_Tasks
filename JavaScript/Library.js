const prompt = require("prompt-sync")();

let id = Number(prompt("Enter the id number: "))
let available = Boolean(prompt("Enter true or false: "))
let count = Number(prompt("Enter the number of copies you want: "))
let book = String(prompt("Enter the name of the book: "))
let author = String(prompt("Enter the authors name: "))

const ans = {
    id,
    available: available === true,
    count,
    book,
    author,
}
console.log(ans)
