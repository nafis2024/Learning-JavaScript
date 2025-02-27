
let resultBar = document.getElementById('result-input')
let copyButton = document.getElementById('copy-btn')

var colorChanger = () => {
    let red = document.getElementById('red')
    let green = document.getElementById('green')
    let blue = document.getElementById('blue')

    const rValue = red.value 
    const gValue = green.value
    const bValue = blue.value

    rgb = `rgb(${rValue}, ${gValue}, ${bValue})`
    document.body.style.backgroundColor = rgb

    resultBar.value = rgb

    copyButton.addEventListener('click', x => navigator.clipboard.writeText(rgb) )

}

setInterval(colorChanger, 50)

//Ai says that I should use event listeners with red, green and blue variables and use the colorChanger function everytime event changes..
//that's for better optimization ofc