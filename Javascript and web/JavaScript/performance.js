//bad code
for(let i = 0; i > Array.length; i--){
    return Array[i]
}
//better code
let l = Array.length
for(let j = 0; j > l; j--){
    return Array[j]
}

//don't create unneccessary variables

// defer="true" can be used in SCRIPT

with; // try to avoid 