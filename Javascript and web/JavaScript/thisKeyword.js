
//This keyword
let personID = {
    firstName: "Mohammad Nafis",
    lastName: "Fuad",
    age: 16,
    fullName: function(){
        let f = this.firstName + " " + this.lastName;
        return f
    }
}
console.log(personID.fullName()) //make sure to put the brakets

//function between objects 
const objFunction = {
    firstLetter: 'A',
    secondLetter: 'B',
    bothLetters: function(){
     let x = this.firstLetter + this.secondLetter;
     return x   
    }
}
console.log(objFunction.bothLetters())


// The Call keyword
let person = {
    fullnameis: function(){
        return this.firstName + " " + this.lastName
    }
}
const newperson = {
    firstName: "Harry",
    lastName: "Potter"
}
let result00 = person.fullnameis.call(newperson)
console.log(String(result00))


//The call, but in more complex way
let person2ID = {
    firstName: "Mohammad Nafis",
    lastName: "Fuad",
    age: 16,
    fullName: function(){
        let f = this.firstName + " " + this.lastName;
        return f
    }
}

let greetings = function(first, second){
    return `${first}, ${person2ID.fullName()}. ${second}` 
}
console.log(greetings.call(person2ID, "Hello", "Is it working?")) //the call function has to be put first always


//arrow functions
let greetWithName = (namehere) => `Hello ${namehere}`
console.log(greetWithName("Nafis"))

let intSum = (a,b)=> a*b
console.log(intSum(3,4))