//Write a program that accepts two numbers from the user and calculate the sum of the two numbers.
function calcsum(a,b){
    return a + b;

}
function calcmul(a,b){
    return a * b;
}

function sqrenum(a,b){
    return (a * a) + (b * b);
}

function avgnum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

function evennum(arr){
 let nbr=[],nbr1= [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            nbr.push(arr[i]);
        }
        else{
            nbr1.push(arr[i]);
        }
    }
    console.log("The even numbers are: " + nbr.join(", ")); //join is extra to display the outpu in better
    console.log("The odd numbers are: " + nbr1);


}
// Example usage:
const num1 = 25;
const num2 = 10; 
const num=[1,2,3,4,5,6,7,8,9,10];

console.log("The sum of " + num1 + " and " + num2 + " is: " + calcsum(num1, num2).toFixed(2));
console.log("The Multiple of " + num1 + " and " + num2 + " is: " + calcmul(num1, num2).toFixed(2));
console.log("The square of " + num1 + " and " + num2 + " is: " + sqrenum(num1, num2).toFixed(2));
console.log("The average of the array is: " + avgnum(num).toFixed(2));
//calling funcation to get even and odd numbers and console log the result
 evennum(num);