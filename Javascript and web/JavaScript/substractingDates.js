
let todayTime = new Date()
function dateSubstractor(x){
    let pastDate = new Date(x)
    let calculate = Math.abs(todayTime - pastDate)
    return calculate / (1000 * 60 * 60 * 24);
}

console.log(dateSubstractor('2008-01-31'))