var ourArray = []
for(var s = 0; s < 4; s++){
    ourArray.push(s+1)
}
console.log(ourArray)

//for in loops for objets
const user = {name:"Nafis", age: 16, gender: "male"}
let newbox= []
for(let x in user){
    newbox += user[x]
}
console.log(newbox)

//for of loops for array
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text)


//the while loop (mostly same as for loop)
let i = 3
var text2= ""
while (i < 10) {
    text2 += "The number is " + i + ". "; 
    i++;
  }
  console.log(text2)

//do while is a version of while loop
do{
    console.log("Hey, this is a do loop")
    console.log("It is run at least once even if the condition does not meet")
}
while(i=0)
