allDays = [
    'Sun',
    'Mon',
    'Tues',
    'Wednes',
    'Thurs',
    'Fri',
    'Sater'
]

let dayID = document.getElementById('day')

function dayLogic() {
    let todayDay = new Date().getDay()
    let lastLogic = dayID.innerHTML += `
        <p>
            Today is ${allDays[todayDay]}day.
        </p>
    `
    return lastLogic
}

dayLogic()