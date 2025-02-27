//theres the normal if 
function comparison(val) {
    if (val >= 18) {
        if (val < 23)
        return "You're a young adult"
    }
    if (val <18){
        return "minor guy"
    }
    return "You're an old citizen"
}
console.log(comparison(18))


//the short way (AND)
function fruitprice(price){
    if (price >= 21 && price <= 49){
        return "affordable"
    }
    else return "outer range" //it works even without the else keyword
}
console.log(fruitprice(50))

//the short way(OR)
function players(numb){
    if (numb >50 || numb <20){
        return "Game cant be created"
    }
    return "Joining game"
}
console.log(players(41))
    
function game(playerCount) {
    if (playerCount < 5) {
      return "Not enough players"
    } else if (playerCount = 5) {
      return "waiting"
    }  else{
        return "joining"
    }
   }

   //order is important in if statements, once if condition is met the code is stopped


