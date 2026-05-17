const {add, subtract, multiply, divide, prime, reverse, isPalindrome } = require('./arithmetic-function')

test("test addition of two positive numbers", () => {

    let numberOne = 82;
    let numberTwo = 18;
    let actual = 100;
    let expected = add(numberOne, numberTwo)
       
    expect(expected).toBe(actual)

})

test("test that the addition of a positive and a negative number works acccurately", () => {


    let numberOne = 82;
    let numberTwo = -12;
    let actual = 70;
    let expected = add(numberOne, numberTwo)
       
    expect(expected).toBe(actual)

})

test("test that the addition of a two negative numbers gives a negative number", () => {


    let numberOne = -12;
    let numberTwo = -18;
    let actual = -30;
    let expected = add(numberOne, numberTwo)
       
    expect(expected).toBe(actual)

})

test("test subtraction of two positives numbers", () => {


    let numberOne = 30;
    let numberTwo = 10;
    let actual = 20;
    let expected = subtract(numberOne, numberTwo)
       
    expect(expected).toBe(actual)

})

test("test subtraction of positive and negative numbers", () => {


    let numberOne = 50;
    let numberTwo = -42;
    let actual = 92;
    let expected = subtract(numberOne, numberTwo)
       
    expect(expected).toBe(actual)

})

test("test multiplication of two positives numbers", () => {


    let numberOne = 5; 
    let numberTwo = 2;
    let actual = 10;
    let expected = multiply(numberOne, numberTwo)
       
    expect(expected).toBe(actual)


})

test("test division of two positives numbers", () => {

    let numberOne = 10; 
    let numberTwo = 2;
    let actual = 5;
    let expected = divide(numberOne, numberTwo)
       
    expect(expected).toBe(actual)

})

test("test prime numbers", () => {
       
    expect(prime(10)).toBe(false)

})

test("test that the number is a palindrome", () => {


    let number = 12121; 
    let actual = true;
    let expected = isPalindrome(number)
       
    expect(expected).toBe(actual)


})

