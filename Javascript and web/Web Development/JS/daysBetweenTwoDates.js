//The code will not work if startDate and endDate is defined in global space 

let submitButton = document.getElementById('submit')
let output = document.getElementById('output')

var differenceCounter = () => {
    let startDate = new Date(document.getElementById('date-1').value)
    let endDate = new Date(document.getElementById('date-2').value)

    if(startDate && endDate) {
        let differenceInMs = endDate - startDate
        let result = Math.abs(differenceInMs / (1000 * 60 * 60 * 24))
        return output.textContent = `The days between two dates are ${result}`
    } else output.textContent = `Please select a valid date`
}

submitButton.onclick = differenceCounter
