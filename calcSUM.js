//Write a program that accepts two numbers from the user and calculate the sum of the two numbers.
function calcsum(a,b){
    return a + b;

}
function calcmul(a,b){
    return a * b;
}

// Example usage:
const num1 = 25;
const num2 = 10;    
console.log("The sum of " + num1 + " and " + num2 + " is: " + calcsum(num1, num2).toFixed(2));
console.log("The Multiple of " + num1 + " and " + num2 + " is: " + calcmul(num1, num2).toFixed(2));
