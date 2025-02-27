//there are more references of these, some are listed
//all reference links https://www.w3schools.com/jsref/default.asp

const points = [40, 100, 1, 5, 25, 10];
const myArr = [[1,2],[3,4],[5,6]];
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Orange"]
let newArray4 = [123,456,678,424,66]
let newArray3 = ["x", "y","z"]
let newArray2 = [123,456,678,424,66]
let newArray = ["qwerty","asd","zxc","jkl"]
let z = "3.6"
let y = 2;
let math = 23;
let math2 = 7.223;
let list = "Dhaka, Chattogram, Sundarban"
let georaphy = "Asia is the biggest continent. I live in Asia."
let jsDays  = "6 days into JS!  "
let name3 = "   Bangladesh  "
let name2 = "  Dhaka  "
let name1 = "Mohammad"
let name = "Nafis Fuad"


console.log(name.at(0))
console.log(name[1]) // just another method
console.log(name.length)
console.log(name.charCodeAt(1))
console.log(name.slice(2,4)) //substr OR substring does the same thing
console.log(name.toUpperCase())
console.log(name.toLowerCase(0,4)) //the numbers do nothing
console.log(name1.concat(" "+name)) //just adds strings
console.log(name2.trim()) //removes extra spaces
console.log(name3.trimEnd())
console.log(name3.trimStart())
console.log(name1.padStart(3,"2")) // result should have been 222Mohammad
console.log(name1.padEnd(9, "a"))
console.log(jsDays.repeat(2))
console.log(jsDays.replace("JS", "JavaScript"))
console.log(georaphy.replaceAll("Asia", "ASIA")) // otherwise only one will be replaced


var newlist = list.split(",") //single and double comma does the same thing
//split comma makes array with every word of the string
console.log(newlist[1])
console.log(list.split("")) // makes array with every letter and space
console.log(name.split("|")) //does the same thing as comma


// \b	Backspace
// \f	Form Feed --- a symbol thingy
// \n	New Line 
// \r	Carriage Return --- Deletes everything before
// \t	Horizontal Tabulator --- just the [TAB] button
// \v	Vertical Tabulator --- gender symbol thingy
let greetings = "Umm. Hello friend.\nHope you are well. "
console.log(greetings)


console.log(name.indexOf("fuad")) // returns -1 if not found
console.log(name.search("Fuad")) // same as indexOf with minor difference
console.log(name.match("ad")) // the [/ll/gi] is used for case insensitive but it doesn't works here
//match doesn't works properly, matchAll doesn't work a bit
console.log(greetings.includes("Umm", 3)) //it a boolean
console.log(name1.startsWith("Nafis")) //boolean
console.log(name.endsWith("ad")) // [true]

let stringTemplates = `It can 
        have 
        lines`
console.log(stringTemplates)
console.log(`Welcome ${name1} ${name}`) // the comma and space in between is also printed
console.log(`Your score is ${(math/math2).toFixed(1)}`) //toFixed is for roundup


//js is accurate up to 15 digits, after that is round ups
console.log(125e-4) //e is for [10 to the power of]
console.log(10 + 10 + "50") //its 2050
console.log("100"/"10") // its 10, cause it will try to make everything numbers
// division, multiplication and substraction works------ addition doesnt
//NaN = not a number
var x = NaN;
console.log(isNaN(x+"10")) //true
console.log(typeof NaN) // result is number

console.log(2 / Infinity) // 0
console.log(2 * Infinity) //infinity
console.log(3 / 0) //Infinity
console.log(typeof Infinity) //number

console.log(0xFF) //hexadecimal if they start with 0x
console.log(math.toString(2)) // the number assigned is base
// Hexadecimal-16. Decimal-10. Octal is base-8. Binary-2

let math4 = new Number(math)
let math3 = new Number(math)
console.log(math3)// it becomes an object
console.log(math3 == math) //true
console.log(math3 === math) //false
console.log(math3 ===math4) //false (because two objects are compared)


console.log(BigInt(32442471289346412334) *BigInt(373298498723))// there cant be decimals or normal numbers
console.log(9007199254740992 === 9007199254740993) //its true and has security risks
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isInteger(math2)) //false
console.log(Number.isSafeInteger(4242))//true


console.log(math.toString() + "Huh")
console.log(y.toExponential(3)) //3 digits are defined after decimal point
console.log(math2.toFixed(2)) //makes 7.223 to 722  (great for working with money)
console.log(math2.toPrecision(7)) // adds 3 zeros after 7.223 
console.log(math.valueOf()) //same as basic console.log
console.log(parseFloat(z)) //converts string to num
console.log(parseInt(z))  //rounds it up to lowest integer
//first numbers are returned if many are given

console.log(math.EPSILON)
console.log(z.MAX_VALUE)


console.log(new Array("a","b","c")) //another way of making array
console.log(newArray[2].toString()) //converts
console.log(newArray.length)
console.log(newArray.sort()) //by alphabetical or numerical 
console.log(newArray[newArray.length -1]) //prints last element
console.log(Array.isArray(newArray)) // true // 
console.log(newArray instanceof Object) //true


console.log(newArray.at(2)) //3rd element
console.log(newArray.join(" |+^ ")) //replaces comma and creates string
console.log(newArray.pop()) //should have deleted the last element
console.log(newArray.shift()) //deletes first element 
console.log(newArray.push("2113")) //returns new array length
//theres a delete()
console.log(newArray.concat(newArray2, newArray3)) //merges them
console.log(fruits.copyWithin(0, 2)) //idk it doesn't works
console.log(myArr.flat()) //merges into single dimention
console.log(newArray2.splice(1,2, "1","3"))  // doesn't works
console.log(newArray.toSpliced(0,1))
console.log(newArray.slice(2,3))


console.log("orange is at position "+[fruits2.indexOf("Orange",0) +1]) // 0 is starting point
console.log(fruits2.lastIndexOf("Orange",3))  // 3 is starting position
console.log(fruits2.includes("Pie")) //false
 
function numericfunction(value, index, array){
                return value > 444 }
console.log(newArray4.find(numericfunction))
console.log(newArray4.findLast(z => z < 444))
console.log(newArray4.findLastIndex(x=> z < 444))
console.log(newArray.reverse())

function sortInReverse(){
 newArray4.sort()
 return newArray4.reverse()
}
console.log(sortInReverse())

console.log(newArray4.toSorted()) //creates a new sorted array
console.log(newArray4.toReversed())
console.log(Math.min.apply(null, points)) //max is also available
//not sure what the null does

second = points.forEach(forEachFunction)
function forEachFunction(value, index, array){
if(value > 33) return "pass"
// incomplete
}
console.log(second)
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()