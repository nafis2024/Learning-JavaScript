//functions
function getAReuseableCode(a,b,c){
    console.log("My name is MNF");
    console.log(a+b+c)
}
getAReuseableCode(1,2,3)
//it immediately prints out the value 

function newCode(x,y,z) {
var value = x+y-z;
return value;
}
newCode(4,3,2);
//now it will just be stored




function myName(nameInput){
    nameInput = "Mnf"
 return nameInput
}
console.log("Hello " + myName())





function f(x,y) {
 return x*x + y*y;
}
function g(x,y){
    return x*x - y*y;
}
console.log(f(24,32) / g(32,24))


function trueorflase(yaTrue){
    if(yaTrue = 'ya') {
        console.log("congrats")
    }
    else console.log("Nice")
}
trueorflase('ya') //no idea why it has to be defined