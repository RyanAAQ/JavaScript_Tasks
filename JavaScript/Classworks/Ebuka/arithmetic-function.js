//
//const sayHello = (name, age) => `Hello ${name}\nyou are an ${age} bastard `
//  
//    
//console.log(sayHello("Nigger"));

function add(numberOne, numberTwo){

    return numberOne + numberTwo
}

function subtract(numberOne, numberTwo){

    return numberOne - numberTwo
}

function multiply(numberOne, numberTwo){

    return numberOne * numberTwo
}

function divide(numberOne, numberTwo){

    return numberOne / numberTwo
}

function prime(number){
    
    if(number <= 1);
        return false;
        
    for(let count = 2; count < number; count++){
        if(number % count === 0)
        return false
    }
    
        return true

}

function reverse(number){
    
    let reversed = 0;
    
    while(number > 0){
    let digits = number % 10;
    reversed = reversed * 10 + digits;
    
    number = Math.floor(number / 10);
}
    return reversed;

}

function isPalindrome(number){

    return number == reverse(number);
}

module.exports = {add, subtract, multiply, divide, prime, reverse, isPalindrome}
