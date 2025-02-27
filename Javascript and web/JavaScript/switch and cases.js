

let sfunction = function(examname){ 
    
    switch(examname){
    case "PSC":
        return "Yep, first Board exam in my entire life";
    break;
    case "JSC":
        return "The exams were cancelled due to the covid pandemic"
    break;
    case "SSC":
        return "Recently taken that"
    break;
}
}
console.log(sfunction('PSC'))

//I cant make it work for this thing above 
//I did it, even without the internet.. All needed was willpower and concentration

let metaData = (x) => {
switch(x){
    case 0:
        return "Lights off"
        break;
    case 1:
        return "Lights on"
        break;
    default:
        return "Where are the lights?"
}

}

console.log(metaData(1))
//I just dont know how to apply it
//Now you know 8) ... Future Fuad is nailing it