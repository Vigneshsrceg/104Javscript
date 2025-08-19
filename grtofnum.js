function numofgrt(a, b, c) {
    if (a >= b && a >= c) {
        return "a is: " + a;
    } else if (b >= a && b >= c) {
        return "b is: " + b;
    } else {
        return "c is: " + c;
    }
}

// Example usage:
const num1 = 30;
const num2 = 30;
const num3 = 30;

console.log("The greatest number among " + num1 + ", " + num2 + ", and " + num3 + " is: " + numofgrt(num1, num2, num3));
