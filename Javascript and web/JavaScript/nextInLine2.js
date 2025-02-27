arr = [1,2,3]
function nextinline(arr, item){
    arr.push(item);
arr.shift()
return arr + item
}
console.log(nextinline(arr, 5))
