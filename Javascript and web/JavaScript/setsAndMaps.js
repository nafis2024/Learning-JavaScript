//sets
var romanLetters = new Set(["III"]) //III is the first element
romanLetters.add("I")
romanLetters.add("II")
console.log(romanLetters) 

//Array (This is different from set.. Set is smth related to Maths)
let newArr = [6,7,8,9]
newArr.push(5)
console.log(newArr) 

//function with set
var sumInt = new Set([1,2,3,4,5])
var sum= "";
sumInt.forEach(z => sum+=z ) //idk why z += sum didn't worked
console.log(sum) //its treating numbers as strings
//it does treat string as strings


//new Set()	Creates a new Set
//add()	    Adds a new element to the Set
//delete()	Removes an element from a Set
//has()	    Returns true if a value exists in the Set
//forEach()	Invokes a callback for each element in the Set
//values()	Returns an iterator with all the values in a Set
//Property	Description
//size	    Returns the number of elements in a Set

//these are also available for Map()


var oneValue = sumInt.values(2)
console.log(oneValue) // its still printing the whole thing

var deleteVal = sumInt.delete(1)
console.log(deleteVal) // why is this boolean

//maps
var mapping = new Map(
    [
        ["X", 343.343],
        ["Y", 43.31],
        ["Z", 55.21]
    ]
)
mapping.set("X", 31.34) //it changed the value
console.log(mapping)

var xAxis = mapping.get("Y") //prints the latest value 
console.log(xAxis)

console.log(mapping.size) // 3

console.log(mapping.has("A"))  //false

console.log(mapping.entries()) //same as printing the whole map

//Maps are just greater in every way (Can hold any datatype and is iteratable)


