 //boolean (y/n)
  const e = 2.71; 
  //it cant be changed
  var a = 1;
  console.log(a)
a = 2;
//var can be changed
let z = 22;
//let is read in a limited area
console.log(a)

var ll = 11  % 3;
console.log(ll)
//the remainder function is used to see if a number is even or odd


 var decimal = 2233.9;
 //these are floating point numbers
var infinity = 0.0 / 2;
console.log(infinity)
//its just zero

var rr = 3;
rr =  rr + 4;
console.log(rr);
rr += 4;
console.log(rr);

rr = rr -4;
rr -= 4;
console.log(rr)
//there are others:
rr /= 23;
rr *= 3;
//works with strings too

//both give the same output (not in here)


var myName = "Mohammad Nafis Fuad"
var mYName = "My name is \"MNF\""
//its escaping quotes
mYName = `it will "work"`
mYName = 'it does too'
console.log(mYName)

var newline = "hey, \n down \tbitspace"
console.log(newline)
//more info https://youtu.be/PkZNo7MFNFg?si=iKoJDz-RDoSwPKza&t=1564


var line = "the problem, ";
line += "can it substract it?"
console.log(line)
//it can add it but not substract


var aName = "Da nam";
var nameLen;
nameLen = aName.length + 22;
console.log(nameLen)
console.log(aName[1]) //a  
console.log(aName[3,5]) // doesnt work
var secondLastLetter =aName[aName.length - 2]
console.log(secondLastLetter)


  function wordBlanks(ace, king, queen, prince){
  var sentence = "";
  sentence += ace + " " + king;
  return sentence;   }
  console.log(wordBlanks("John", "Robert", "violet", "bruce"))
  console.log(wordBlanks("notJohn", "notRobert"))

//functions...

var normalArray = ["Nafis", "01", 2 ]
var anArrayInsideAnother = [normalArray, ["the second one", 22], ["3"]]
console.log(anArrayInsideAnother)

var newData = anArrayInsideAnother[1][1];
console.log(newData)
normalArray[1] = 2;
console.log(normalArray)

//the result will be undefined if data in array in absent

normalArray.pop() // [] cant be added

//last element is gone
normalArray.shift()
//first elememt is gone
normalArray.push("23")
//adds element at last
normalArray.unshift(["dog", "cat", 2])
//adds element at first


function resueableCode() {
  console.log(7 % 6);
}
resueableCode(); //not console  OR return
 

function insideTheBraket(a,b,c,){
  var fnumber = a + b;
  var fnumberI = b + c;
  var fnumberII = a * b * c ;
  var finalnum = fnumber - fnumberII * fnumberI //it uses BODMAS
  console.log(finalnum);
}
insideTheBraket(22, 32, 131);

  function fun (){
  }
  fun()
  //global functions https://youtu.be/PkZNo7MFNFg?si=B0yMNMbTTK66SS2H&t=3534

  function insideTHeBraket(a,b,c,){
    var fnumber = a + b;
  }
 // console.log(fnumber); 
 //it cant be accessed  

var myDress = "dddress";
function dresso() {
return myDress

}
console.log(dresso())

function dressy() {
  var myDress = "Tshirt"
  return myDress
 
  }
  console.log(dressy())
  //local var is checked first
  //global var can be used anywhere
  
function substracte(nUM) {
return nUM -91;
}
console.log(substracte(3132))


var arrayI;
var testarray = [1,2,3,4,5];
function storage(arrayI, list) {
  testarray.push(list)
  return list;
}
console.log(JSON.stringify(testarray));
console.log(storage(arrayI, 66));
console.log(JSON.stringify(testarray));
// https://youtu.be/PkZNo7MFNFg?si=Lmt0vUxPbReN9d8o&t=4105


 function theBoolean(trueorflase) {
  if (trueorflase) {
    return "yeep" // it stays for false
  }
  return "nopee" //the second one is false
 }
console.log(theBoolean(false))

 function defValue(a,b){
  if (a+b == 100){
    console.log("Works")
  }
  console.log("Great")
 }
defValue(22,44)
// double equal converts number to string ==
//triple equal does not ===
function neVal(b,d){
if (b != d) {      //inequality sign
  return "Not equal"
}

if (b*d == 25) {
  return "Damn"
}

return "equal"
}
console.log(neVal(5,"5")) //says equal
// !==
//infinite if statements can be used
//there are > , >= , < , <= 

 //AND, OR if statements are in different doc (simplify.if)
 function game(playerCount) {
  if (playerCount < 5) {
    return "Not enough players"
  } else {
    return "joining game"
  }
 }

var leagueName = ["Newcomer", "bronze", "silver", "Gold"]
function leagueFinder(level){
  switch(level) {
  } return leagueName[level-1]
}
console.log(leagueFinder(4))
//I failed here to use case

function something(value){
  var ans;
  switch(value){
    case "100": ans = "Enter value not string"; break;
    case 1:
    case 10:
    case 50: ans = "comparatively small"; break;
    case 100: ans = "Hundred"; break;
    case 1000: ans = "Thousand"; break;
    case 100000: ans = "Lakh"; break;
    case 1000000: ans = "Million"; break;
    default: ans = "Not a roundup"
  
  }
  console.log(ans)
}
something("100")
//semicolons are important here idk why 
//without break it would reach Million


//auto fact checker
function tof(a,b){
 
  if (a < 0 || b < 0) {
  return "syntex error"
} return a > b
}
console.log(tof(-12,42))
 
var profile = {
  "name":"Mnf", // comma not semicolon 
  "age": 16,
  "location": "Dhaka",
  "student grade": 11,
  1230: ["uttara"],
  "income": 0,
 //  creatingFunction(gear){ return 2}

}
console.log(profile.name)
var studentAge = "age";
console.log(profile[studentAge])
console.log(profile["student grade"])
//   console.log(profile[gear()])


profile.name = "Mohammad Nafis"
//object data can be changed and be added (also delete)
profile.aimbition = "be a software engineer"
//there are two ways ig
profile['code editor'] = "VS Code"

delete profile['code editor']
console.log(profile)


//objects can be used to lookup stored data 
function collegeLocator(Name){
  var locationII;
  var stateORcity = {
    "MIT": "Massachusettes",
    "Cambridge": "Cambridge",
    "Imperial college": "London"
  }; //semicolons are important here
  locationII = stateORcity[Name] //no idea why it is like this
  return locationII;
}
console.log(collegeLocator("MIT"))
//after tons of tries

// profile.Grade = 5;
function profileChecker(info){
  if (profile[info]){
    console.log(profile[info]); 
  } else {
    console.log("Data not found")
  }
}
profileChecker("Grade")



var arrayII= []
var i = 1;
while(i<4 && i> -10){
  arrayII.push(i);
  i--;
}
console.log(arrayII)


for(var j = 11; j >  -23; j -= 2){ // look out for the >, < signs while changing
  arrayII.push(j);
}
console.log(arrayII)
//(backwards)odd or even numbers are printed,  -- ++ also works
 

var array = [1,2,3,4,5,6] = 0;
for(var a =0; a <array.length; a++){
 numCount += array[a]
}
console.log(numCount) //it sums it up
  
arrayIII = [[1,2],[3,4,5],[6,7,8,9]]
function multiplyier(valueI) {
  var constant = 1;
  for(var i=0; i< arrayIII.length; i++ ){
    for(var j =0; j< arrayIII[i].length; j++){
      constant *= arrayIII[i][j]
    } // mind these {}, make sure to write return in right place

  } return constant
} 
console.log(multiplyier(arrayIII))
var i = 0
do {
  array.push(i);
  i--;
} while (i > -5)
console.log(array)


function rndfrac(){
  console.log( Math.random())
}
rndfrac()
// this is generating in range of (0,1)

var integers = Math.floor(Math.random() * 42);
console.log(integers)

function rangedIntegers(minVal, maxVal){
  return Math.floor(Math.random() * (maxVal - minVal +1 ) + minVal)
}
console.log(rangedIntegers(34,42))


function converter(string){
  console.log(parseInt (string, 2))
}
converter("10111")
//it rounds it up but as a number


function checkers(a,b,c){
  return a ===b +1 ? true : false;
}
console.log(checkers(3,2,1))


function checksign(num){
  return num > 0 ? "positive": num === 0 ? "zero" : "negative"
}
console.log(checksign(0))

var me = "Nafis";
var me = "Fuad";
let countr = "BD" // let doesnt allow me set a thing twice
let country = "UK";
country = "BD" //but i can change it 
//that's why most people use let

//uses of let
function nonglobaluse(){
  let k = "UK"
  if (true){
    let k = "BD"
    console.log("you live in " +k)
  } console.log("You live in",k)
}
nonglobaluse()


function letExample(stringsI){
  var string = "Your name is "
  for(var i = 0; i < string.length; i){
    return string + stringsI
  } //it could be done without that for
}
console.log(letExample("Nafis"))

const ARRAY = [4,6,5]
ARRAY[1]= 5;
ARRAY [2]= 6 //it's called array mutation
console.log(ARRAY)

const constants = {
  PIE: 3.1416,
}
//          Object.frezze(constants)
try{
  PIE = 42;
} catch (newpie){
  console.log(newpie)
}
console.log(PIE)
//here pie can be changed(mutated)
//not if we use object.frezze


let abc = () => console.log("yee")
abc()
//its arrow function which is very quick

// function summingArray(arr1, arr2){
// var mix = args.ruduce(arr1+arr2)
//  return mix }

//doesnt work again
// console.log(summingArray([1,2],[3,4]))


//learn arrow function from somewhere else

 
function summer(num1, num2 =3){ // 3 is by default
  return num1 + num2
}
console.log(summer(2,4))

//2:54
//skip---------------------------
//3:00
//learn about the rest operator 
let [x,r,,,b] = [1,2,3,4,5,6]
console.log(x,r,b)

//3:02
//skip----------------------
//3:07
const source = [1,2,3,4,5,6]
function removeElements(list){
  var [a,b,, ...arr] = list;
  return arr;
} const arr = removeElements(source)
//doesnt work

var person = {
  name: "Emma",
  age:22,
}
const greeting = `hey there ${person.name}! Nice to know your age is ${person.age}`
console.log(greeting)

//3:09
//skip----------------------
//3:13
//learn making classes
var profileInfo = (name, age, gender) => ({name, age, gender})
console.log(profileInfo("M", 22, "male"))


// import {john} from "./exportFileDemo";
// import * as john from "./exportFileDemo"
var resultt = john(1,2,3)
console.log(resultt)
//no idea why it doesnt works
//learn exporting blocks 
 
//learn higher order functions
//learn "this" and "prototype chain
//learn maps"

//download veet or webpack for module bunding
//use network waterfall for webpage performance
//use fireships video to use js properly


//use react native for ios or android apps
//use electron for desktop app 

/// use typescript or something to improve your code