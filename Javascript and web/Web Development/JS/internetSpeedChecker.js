let speedBits = document.getElementById('bits')
let speedKbs = document.getElementById('kbs')
let speedMbs = document.getElementById('mbs')


let imageSizeInBytes = 8386 * 2229 //I forgot each pixel represents 1 byte
let imageLink = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg' //Put the API link here



let speedFinder = () => {
    let cachedImg = imageLink + '?nocache=' + new Date().getTime()
    //the line above was added to prevent cached image from being loaded

    let startTime = new Date().getTime()

    fetch(cachedImg)
    .then(responsE => responsE.blob()) //I can't just use anything.. I have to use blob() idk why
    .then(blob => {

        let endTime = new Date().getTime()
        let durationInS = (endTime - startTime) / 1000

        const calcBps = imageSizeInBytes / durationInS
        const calcKps = calcBps / 1024
        const calcMps = calcKps / 1024 //the actual size might be 8 times than this i guess
    
        speedBits.textContent = `Speed In Bits: ${calcBps.toFixed(0)}`       
        speedKbs.textContent = `Speed In Kbs: ${calcKps.toFixed(0)}`
        speedMbs.textContent = `Speed In Mbs: ${calcMps.toFixed(0)}` 
    })
    .catch(err => {
        speedBits.textContent = `We are having problems.. Try again later.`    
        speedKbs.textContent = '';
        speedMbs.textContent = '';
    })
}

window.onload = speedFinder