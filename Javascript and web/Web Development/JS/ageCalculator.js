let input = document.getElementById('date-input');
let buttonForInput = document.getElementById('calc-age-btn');
let year = document.getElementById('years');
let month = document.getElementById('months');
let day = document.getElementById('days');

var ageCalculator = () => {

 //   window.alert("Button Clicked"); //This command was added to do debugging.. Turns out, the JS file was not being read


    let userInput = new Date(input.value);
    let today = new Date();
    
    if (isNaN(userInput)) {
        alert("Please enter a valid date.");
        return;
    }

    const resultInMS = Math.abs(today - userInput);
    
     //ms to years
     let yearsFraction = resultInMS / (1000*60*60*24*365)
     //Calc Years
     let resultYears = Math.floor(yearsFraction)
     //Years - wholeYears
     let monthFraction = yearsFraction - Math.floor(yearsFraction)
     //Calc Months
     let resultMonths = Math.floor(monthFraction)
     //Months - wholeMonths
     let dayFraction = resultMonths - Math.floor(resultMonths)
     //Calc Days
     let resultDays = Math.floor(dayFraction)

    year.textContent = resultYears;
    month.textContent = resultMonths;
    day.textContent = resultDays;
};

buttonForInput.addEventListener('click', ageCalculator);

//I can use the substracting logic and them work with decimals after calculating the year with >> float(x) - Math.floor(x) .. repeatately 
