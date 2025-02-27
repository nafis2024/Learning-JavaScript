let numDiceElement = document.getElementById('numDice')
let numSidesElement = document.getElementById('numSides')
let startStopButton = document.getElementById('startStopButton')
let output = document.getElementById('output')
let totalElement = document.getElementById('total')

let diceLogic
let unlessBreak = false;

const startRollingDice = () => {
                            
 diceLogic = setInterval(() => {  //setInterval takes a function first, I could have just defined the function earlier and then used it here to make it look clean
        let numDice = parseInt(numDiceElement.value);
        let numSides = parseInt(numSidesElement.value);
        let results = []
        let total = 0

        for(a=0; a<numDice; a++){
            const roll = Math.floor(Math.random() * numSides) + 1
            results.push(`Dice (${a+1}) : ${roll}`)
            total += roll
        }
            
    output.textContent = results.join(',')
    totalElement.textContent = `Total: ${total}`
    },
    100
    )
}
 //my code broke without this useless thing

startStopButton.addEventListener("click", () =>{
  
    if(unlessBreak){
        clearInterval(diceLogic)
        startStopButton.textContent = 'Roll Dice'
        unlessBreak = false
    } else{
        startRollingDice()
        startStopButton.textContent = 'Stop rolling'
        unlessBreak = true
       
    }
  })