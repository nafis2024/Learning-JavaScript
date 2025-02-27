let words = document.getElementById('word-count')
let characters = document.getElementById('charac-count')

var counter = () => {
    let content = input.value
    // the line below is proven unneccesary and can be done directly
   // let allChar = Array.from(content.split(''))
    characters.textContent = content.length

    let allWord = content.trim().split(/\s+/).filter(Boolean)
    //trim is used to remove spaces from end and start
    //filter(Boolean) created a new array which contains no spaces
    words.textContent = allWord.length
}

let input = document.getElementById('input-textarea')
input.addEventListener('input', counter)












