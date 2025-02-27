//see in Google Keep Notes for Logic Gate theory
let x = ~4
console.log(x) // -5

let i = 1// 1 = 00000001
let j = 2// 2 = 00000010 
console.log(i | j) // 3 because it combines 11
console.log(i & j) // 0 because both have to be 1 to trigger 1


//Learn about bitwise operators


//FIX IT AFTER SOMETIME
function intChecker(a,b){
    if(a & b > 0){
        return "Both are positve"
    } else if (a | b > 0){
        return "One of them are positive"
    } else return "Both are Negative numbers"
}
console.log(intChecker(332,43))

function intChecker2(c,d){
    if(c & d > 0){
        return "Both of them are positive this time"
    } else if(c | d > 0){
        return "One of them are positive this time"
    }   else return "None of them are positive"
}

console.log(intChecker2(223,2))

//dont know it doesn't work

