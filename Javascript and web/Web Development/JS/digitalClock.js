let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')



var clockLogic = () => {
    var time = new Date()    
      let x =  hour.textContent = `${time.getHours()}`
      let y =  minute.textContent = `${time.getMinutes()}`
      let z =  second.textContent = `${time.getSeconds()}`

        if(x < 10){
          x = `0${x}`
        } else if(y < 10){
            y = `0${y}`
        } else if(z < 10){
            z = `0${z}`
          }
    }
   
let refresher = () => { setInterval(clockLogic,1000) }
refresher()