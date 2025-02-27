//EVERY alert HAS BEEN REPLACED WITH console.log
//TO MAKE PROMPT WORK const prompt = require("prompt-sync")(); HAS BEEN ADDED



console.log("what does this do?");
//chapter 1----------------
const prompt = require("prompt-sync")();

var myname;
myname = "Nafis";
console.log(myname);
//chapter 2---------------


var anumber = 2929;
var anothernumber = anumber + 272;
console.log(anothernumber);

var doesnthavetobesum = 191 + 291;
//spaces between numbers are important ig
var newnum;
newnum = 3829 + 28;

var itcanbe = 10;
itcanbe = itcanbe + 23;
//chapter 3---------------


//try to use camelCase
//skipped most C4 exercises
//chapter 4 --------------


var bNumber = 1 + 2;
console.log(393+22);
var modulus = 100 % 3;
//the remainder would be 1

// other op. are (* + - /)
//chapter 5 --------------


var num = 8;
var nnum = num++;
//the output for anum is 9, for num is 8;
var nUm = 8;
var nnUm = ++nUm;
//the output for both nUm and nnUm is 9; 
//chapter 6 --------------(UNCLEARED)


var math = (2 * 232 / 83 + (3+3) - 2);
//chapter 7 --------------


var newway = ("33" + 3);
//333
var spokenmath = ("2 and 2 side by side is not equal to " + 22);
var greetings = "Hello user, "
var name = "Nafiss";
var extra = "!!";
var all = greetings + name + extra;
console.log(all);
//Chapter 8 -------------


var questions = "whats your name?";
var da = "human";
var neew = prompt(questions, da);
console.log(neew);

var numOfCats = prompt("How many cats?")
console.log(numOfCats + 1);
//result will be 11 if prompt answer is 1

var spokenmath = ("2 and 2 side by side is not equal to " + 22);
var greetings = "Hello user, "
var name = prompt("Your Name?");
var extra = "!!";
var all = greetings + name + extra;
console.log(all);
//chapter 9 -------------


//exercises has only been done with seriousness is to chapter 7;


var q = prompt("Whats your name?")
console.log(q);
//q will be printed when console.log is not there
if (q === "a") { console.log("Okay") };
if (q === "A") { console.log("OKAY")};
//chapter 10 ------------


var qq = prompt("lets ask another ?");
if (qq !== "Yes") { console.log("ohh")};

var height = prompt("how tall are you?")
if (height >= 1.6 ) { console.log("kinda avarage")}
if (height >= 2) {console.log("you're high")}
//as both indicate >= , 2 means both will execute
if (height < 1.6) {console.log("shortt")}
//chapter 11 -----------


var quesans = "yes";
var qqq = prompt("the else command ??")
if (qqq === quesans) { console.log("correct")}
else if (qqq !== "Yes") { console.log("partly")}
else { console.log("wrong")}
//if at first, else if for exceptions, else at last
//chapter 12 ------------


var weight = prompt("mass in kg?")
var mind = prompt("are you lost?")
var age = prompt("your age?")
if ( weight > 50 && mind == "yes" && age >= 18) {console.log("Good")}
else {console.log("okay")}

var hh = prompt("whats your height?")
if (weight >= 50 || hh <= 1.6) {console.log("doing great")}
else {console.log("lets see")}
// && means and, || means or
//chapter 13 -------------

//make sure to revise and try nesting (nested ifs) 
//important for complicated and compact code
//chapter 14 -------------


var cities = ["Dhaka", "Chattogram", "Thakurgaon", "Rangpur"]
var thisIsAListOfPrompts = [weight, age, height]
console.log(cities[0])
//Dhaka will be printed
console.log (thisIsAListOfPrompts[1])
//age will be asked
//chapter 15 -------------


var arrray = [];
//array's can be defined later
arrray[0] = "Test1";
arrray[3] = "Test2";
//it will print but it will show there's empty spaces

var newarray = ["a", "b", "c", "d", "e"]
newarray.push("f", "g")
//adds 2 elements at last

newarray.pop();
//ONLY deletes the last element
//chapter 16 ------------


newarray.shift();
//deletes ONLY the 1st element 
newarray.unshift("not-a", "not-b")
//adds elements at first

//the legendary SPLICE
newarray.splice(-1)
//removes the last element
newarray.splice(1)
//prints the first[0] element
newarray.splice(2)
//prints the first two[0,1] elements 

var arrayy = ["0", "1", "2", "3", "4", "5"]
var list = arrayy.splice(2, 2, "Two", "Three")
console.log(list); 
//prints the deleted elements
//starts from 0, 
//1st num represents starting point
//2nd num indicates length
newarray.splice(1, 2, "B", "C")
//prints [ 'a', 'B', 'C', 'd', 'e' ]
newarray.splice(1, 0, "!!")
//adds without deleting

var slicing = newarray.slice(2, 3); 
console.log(slicing);
//idk why it only prints b (THE FIRST ELEMENT IS NOT CONSIDERED)
//STARTS FROM 1 
var slicing2 = newarray.slice(-3)
//prints last 3 elements
//chapter 17 ----------


for (let i = 1; i <100; i++){
    if (i % 2 == 1) 
    if (i % 3 == 2) console.log(i); 
 }
 //prints some odds

for (let j = 0; j <= 3; j++) {
    if (arrayy[j] == qq)
    console.log("great")
    break;
}
for (let j = 0; j <=3; j++){
if (arrayy[j] != qq)
console.log("also great")
break;
//use break if code runs one than once
}
//dont always use ;
//chapter 18 -----------
 




