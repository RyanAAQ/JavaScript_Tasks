const prompt = require("prompt-sync")();

const gradeChecker = (grade)=>{

    if(grade >= 70){
        return "A"
}
    else if(grade >= 60){
        return "B"
}
    else if(grade >= 50){
        return "C"
}
    else if(grade >= 40){
        return "D"
}
    else{
        return "F"
}
}

let grade = String(prompt("Enter the score: "))

console.log(gradeChecker(grade))
