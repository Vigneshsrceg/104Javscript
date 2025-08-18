//print area of circle

function circlearea(r) {
    // Calculate the area of a circle
    return Math.PI * r * r;
}

// Example usage
// You can call the function with any radius value
console.log("Area of circle is: " + circlearea(5).toFixed(2));
//print circumference of circle
function circlecircumference(r) {
    // Calculate the circumference of a circle
    return 2 * Math.PI * r;
}
// Example usage
// You can call the function with any radius value  
console.log("Circumference of circle is: " + circlecircumference(5).toFixed(2));

// diameter of circle
function circlediameter(r) {
    // Calculate the diameter of a circle
    return 2 * r;
}

// Example usage
console.log("Diameter of circle is: " + circlediameter(5).toFixed(2));
