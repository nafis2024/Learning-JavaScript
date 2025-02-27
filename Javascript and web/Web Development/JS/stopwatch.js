let [hour, minute, seconds, milliseconds] = [0,0,0,0]
let timerRef = document.querySelector('.timerDisplay')
let timerRunning = null

let timerStartingF = () => document.getElementById('startTimer').addEventListener('click', startTimer)
let timerPausingF = () => document.getElementById('pauseTimer').addEventListener('click', pauseTimer)
let timerResetingF = () => document.getElementById('resetTimer').addEventListener('click', resetTimer)

let timerFunction = () =>{
    milliseconds +=1; //it would be 10 if there were 3 digits for the mS
    if(milliseconds >= 60){
        milliseconds = 0
        seconds++
    } if(seconds >= 60){
        minute++
        seconds = 0
    } if(minute >= 60){
        minute = 0
        hour++
    }

    const ms = formatTimer(milliseconds)
    const s = formatTimer(seconds)
    const m = formatTimer(minute)
    const h = formatTimer(hour)

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`

}

const formatTimer = (x) => {
 return x.toString().padStart(2, '0')
}

let startTimer = () => {
    if(timerRunning!==null){
        clearInterval(timerRunning)
    } 
    timerRunning = setInterval(timerFunction, 100)
}

let pauseTimer = () => {
    clearInterval(timerRunning)
}

let resetTimer = () =>{ //both the null and clear values.. should be declared first, otherwise doesn't work
    clearInterval(timerRunning)
    timerRunning = null    
 
    hour = 0
    minute = 0
    seconds = 0
    milliseconds = 0
                        //maybe the dedicated array is now working.. So every variable has to declared independently
    timerRef.textContent = '00 : 00 : 00 : 00'
}




timerStartingF()
timerPausingF()
timerResetingF()
