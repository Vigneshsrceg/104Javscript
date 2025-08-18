//Write a program to compute the perimeter and area of a rectangle.

function perm(l,b) {
    // Calculate the perimeter of a rectangle
    return 2 * (l + b);
   }

function areaofperm(l,b) {
    // Calculate the area of a rectangle
    return l * b;
}   

// Example usage
// You can call the functions with any length and breadth values
perm(10,20);
areaofperm(10,20);

// Output the results 
// You can use console.log to display the results
 console.log("Perimeter of rectangle is: " + perm(10, 20));
    console.log("Area of rectangle is: " + areaofperm(10, 20));
