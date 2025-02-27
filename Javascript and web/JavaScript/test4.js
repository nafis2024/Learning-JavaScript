function powers(num){
    return num ** 3
} console.log(powers(4))

function possibleBonus(a, b) {
    for(var i = a; i <= 6; i++ ){
        i += 1;
  if (i === b){
    return true
  } else return false

    }

}

console.log(possibleBonus(2,3))