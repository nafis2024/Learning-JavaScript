console.log("Hello World")


//the basics again
let a = 34
let b = 3
let c = a + b;
let person = "Homo sapiens"
let $ = "This is completely valid"
let _thisOneToo = 20
let d = 2 ** 3  

    let e = 2;
    e **= b

console.log(8 != "8") //false
console.log(e)

//skipped JS assignments (! <<<<< >>>> >>= ||= &=)

let mobile = {
    company: "Google",
    model: "7a",
    color: "Blue",
    price: 399,
    fullDescription: function(){
        var printed = this.company + " Pixel " + this.model;
        return printed
    }
}
console.log(mobile.fullDescription())
console.log(mobile["price"])

let xy = new String("A name")
console.log(xy)


const numbers2 = [1,3,5,7,9]
let numbers3 = numbers2.map(function0)
function function0(value, index, array){
  return value * 3
}
console.log(function0(2))

const integers = [1,2,3,4,5]
let theIntSum = integers.reduceRight((u, i) => u + i )
console.log(theIntSum)
//reduceRight doesnt affect the original array, reduce does


const doublingArray = [1,2,3,4,5]
let flatMapping = doublingArray.flatMap((x) => x *3)
console.log(flatMapping)
//difference between flatMap and map is that flatMapping doesnt affect the original array

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year)
// the ... merges the arrays

console.log(10== 3)
//everything without a value is false
let dd = Boolean(false)
// The == is normal checking
// === this the high level checking
//comparing objects will always be false no matter ==/===

console.log(34 !== "34") //true

age= 17;
let ageVerify = (age < 18) ? "Still not an adult":"You're an adult"
console.log(ageVerify)

//      "2" < "12"	false	
//      "2" > "12"	true
//the only exceptions I found about comparison

function Merit(resultNum){
    let retuning;
    if(isNaN(resultNum)){
        return "The input has to be a number"
    } else{
        retuning = (resultNum < 1810) ? "Congrats":"Try hard next time"
        return retuning
    }
}
console.log(Merit(323))

let name = null;
let text = "missing";
let result = name ?? text;
console.log(result)
//Great for forms that auto fillup and still come up empty
// ?? is nulling operator
//prints the thing if there, otherwise, gives out other desired thing


const car = {type:"Fiat", model:"500", color:"white"};
var carName = car?.type
console.log(carName)
console.log(car.type) //same thing
//in this case results are same without the (?.) but it stops errors

var ourArray = []
for (var s = 0; s < 4; s++){
    ourArray.push(s+1)
}
console.log(ourArray)

for (let i = 0; i < 4; i++){
    console.log("Count", i)
}

var types = typeof [1,2,3,4]
console.log(types) //an object

let cars= ["Toyota", "Volvo", "BMW"]
console.log(cars instanceof Number) //it shows true for object and array


//code debugging means understanding where the problem/bug is 
//in a debugger, breakpoints are set in various lines (So only that specific code will be run)

//JS reading conventions => Avoid making a line of code with more than 80 characters


//solving the problem with floats
let r = 1
let t = 2
let rAndTby10 = (r / 10) + (t / 10) //this is the problem
let randtby10 = (r + t) / 10 //solve
console.log(rAndTby10) 
console.log(randtby10)

//null means an obj is defined and given the value of null
//undefined means there is no value given in any declared obj
