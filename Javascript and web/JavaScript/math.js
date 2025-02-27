console.log(Math.PI * Math.E)
console.log(Math.sqrt(9))

//for any method 
// Math.method(Number)

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

let x;
Math.round(x)	//Returns x rounded to its nearest integer
Math.ceil(x)	//Returns x rounded up to its nearest integer
Math.floor(x)	//Returns x rounded down to its nearest integer
Math.trunc(x)	//Returns the integer part of x (new in ES6) //same as parseInt

console.log(Math.sign(-132)) //returning -1 0 1

Math.pow(2,4) //2 to the power of 4

Math.abs(-4343) //returns absolute value

y = "It is in Radian"
z = Math.PI * 180
Math.sin(y) //there cos, tan and hyperbolic functions ofc

Math.LOG3y //log base 3 it is

Math.min(0, 150, 30, 20, -8, -200); //there max ofc


// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10 + 1);


//the proper random function
function RandomizeBetween(mix, max){
    return Math.floor(Math.random() * (max - min)) + min
}
//this one includes min max
function RandomizeAll(mix, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(RandomizeAll(34,50)) //nvm dont know why its not running
