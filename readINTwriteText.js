function intToText(value){

    switch(value){
        case 0:
            return "zero";
        case 1:
            return "one";       
        case 2:
            return "two";
        case 3:
            return "three";     
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";

        case 7:
            return "seven";
        
    }

    if(value < 0 || value > 7){
        throw new Error("Value must be between 0 and 7");
    }
}

//main 
const value = 52.333;
try {
    const text = intToText(value);
    console.log(`The number ${value} in text is: ${text}`);
}catch (error) {
    console.error(error.message);
}