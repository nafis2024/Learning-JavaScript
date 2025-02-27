var num = 2; 
function confused(domain, range){
var domain = num * 99 / 3;
return num + range;
}
confused(2,3)
console.log(confused(2,3))



var arrayII = [1,2,3,4,5]
var num = 44;

function addingObj(array, num) {
    arrayII.push(num)
    return arrayII
}
console.log(JSON.stringify(arrayII));