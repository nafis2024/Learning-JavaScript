let a = Number("8943")
console.log(a)

let b = parseFloat("43.42 j") //this can convert to number and disclues any letters
console.log(b) 

let c = parseInt("43.234")
console.log(c)

let d = new Date(2023, 3, 1)
console.log(d.toString())
String(d) //This does the same thing as .toString

console.log(String(true))

console.log("x" + null) //surpirsingly returns xnull


