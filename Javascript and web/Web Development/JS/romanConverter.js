let output = document.getElementById('output')
let submit = document.getElementById('submit')

const letters = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
}

let converter = () => {
    let input = document.getElementById('input')
    let int = parseInt(input.value)
    let result = ''
    let romanVal = Object.keys(letters)
    romanVal.forEach((keyVal) => {
        while(letters[keyVal] <= int){
            int -= letters[keyVal]
                result += keyVal
        }
    })
    output.innerHTML = `${result}`
}

submit.onclick = converter

