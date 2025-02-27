
//date objects
const timeClock = new Date(2024, 3, 21,3,44) // month count starts from 0
console.log(timeClock.toDateString()) // a more readable format than just toString()

const lastCenturyDate = new Date(22, 2,33) // its 19xx
console.log(lastCenturyDate)
const mSecondTime = new Date(823934) // treated as mili seconds
console.log(mSecondTime)

//there are .toUTCString()  and  .toISOString()
// ISO = The International Standard YYYY-MM-DD
//make sure to write 3 as 03 to prevent errors
//there are date objects and their conversions

console.log(lastCenturyDate.getFullYear()) //just the year
console.log(lastCenturyDate.getHours())
console.log(timeClock.getDate())
//day 0 is sunday
//theres many other get features
console.log(lastCenturyDate.getTimezoneOffset()) // the difference between local time and GTH time



//const emptyDate = new date(2902,23,31)
//let pushingDate = emptyDate.setFullYear(2021)
//console.log(pushingDate)

//there are set dates methods but idk it isnt working
