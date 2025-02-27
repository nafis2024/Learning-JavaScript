const items = {
    "apple": 0,
    "Banana": 343,
    "Mango": 23,
}

const itemsAppleChecker = new Promise((copy, error) => {
    if(items.apple > 0){
        return copy(`There are ${items.apple} apples available`)
    } else return error(`Sorry we are out of stock`)
})


