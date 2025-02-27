let submitButton = document.getElementById('get-leap-years')
let result = document.getElementById('result')

let resultArray = []

var leapYearFinder = () => {
    let startYear = document.getElementById('start-year').value 
    let endYear = document.getElementById('end-year').value
    let tempArray = []

    for(i = startYear; i < endYear; i++) {
         if(i % 4 == 0 && i % 100 !== 0 || i % 400 == 0){  //don't bother to use the web to find solution to these exceptions and logic
            tempArray.push(i) 
         }
    } 
    let resultArray = tempArray

    result.innerHTML = `<p>
        There are ${resultArray.length} leap years in the given range. The following leap years are ${resultArray.join(', ')}.
                        </p>`
}

//I had to add something inside the css file to make sure the line gets wraped 
submitButton.onclick = leapYearFinder


//method 1 (to get the number of leap years only)
//  startYear > leapyear? > no > startyear+remainder = closestSLY
//  endYear > leapyear? > no > endYear-remainder = closestELY
//closest(ELY - SLY) > ans + 1 = result

//method 2 (make an array with the leap years using for loop)
// range (startY - EndY) = array.push
// forEach (array) > leapyear? > resultArray
//  resultArray.length

//required array methods: length, push, join