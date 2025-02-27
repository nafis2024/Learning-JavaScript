//for each // -------------- This is sometimes great to work with
let array = [1,3,5,6]
array.forEach(function (item,index){
    console.log(item,index)
}
)

//map ---------- no need
const numbers = [23,32,1,543]
let doubles = numbers.map(function(item){
    return item * 2
}
)
console.log(doubles)

//filter --------------------- This one seems important
let integers = [4,5,6,7,8]
let odds = integers.filter(function(item)
   { return item % 2 == 1 }
)
console.log(odds)

//reduce -------no need 
let sum = [1,2,3,4].reduce(function(result, item)
    {return result + item; 0} //there should be a zero but it works without it
)
console.log(sum)

//some --------- no need (Boolean)
let negInt = [2,3,51,-1,-2].some(function(item){
    return item <0
})
console.log(negInt)

//every --------- no need (Boolean)
let negInt2 = [2,3,51,-1].every(function(item){
    return item <0
})
console.log(negInt2)

//find ----------- This is sometimes great to work with
let nameList = [{name: "Nafis"}, {name: "Mohammad"}, {name: "Fuad"}]
var findingName = nameList.find(function(item){
    return item.name === "Nafis"
})
console.log(findingName)

//find index ------- Another form of find
let nameList2 = [{name: "Nafis"}, {name: "Mohammad"}, {name: "Fuad"}]
var findingIndex = nameList2.findIndex(function(item){
    return item.name === "Nafis"
})
console.log(findingIndex)
