function getComputerChoice(){
    let randomizer = Math.random()
    if(randomizer >= 0.67){
        return String('ROCK')
    } else if(randomizer >= 0.34){
        return String('PAPER')
    } else return String('SCISSORS')
}

const prompt = require("prompt-sync")();

function getHumanChoice(){

    let x = prompt(String('What do you choose? Rock? Paper? Scissors?'))

        if(['ROCK','PAPER','SCISSORS'].includes(x.toUpperCase())){ //Idk why people online put an ! after if( .. It works without it
            return x.toUpperCase()
        } else return String('Please provide a valid answer!')

}

let p = 'PAPER'
let s = 'SCISSORS'
let r = 'ROCK'

let d = String("The Match is draw")
let cw = String("Computer wins!")
let hw = String("You scored one point!")

let humanScore = 0
let computerScore = 0

var playRound = () => {


    let cc = getComputerChoice()
    let hc = getHumanChoice()

    if(hc === r){
        if(cc === r){
            return d
        } else if(cc === p){
            computerScore+= 1;
            return cw
        } else if(cc === s){
            humanScore+= 1;
            return hw
        }
    }
    if(hc === p){
        if(cc === p){
            return d
        } else if(cc === s){
            computerScore+= 1
            return cw
        } else if(cc === r){
            humanScore+= 1
            return hw
        }
    } 
    if(hc === s){
        if(cc === s){
            return d
        } else if(cc === r){
            computerScore+=1
            return cw
        } else if(cc === p){
            humanScore+= 1
            return hw
        }
    }

    return `The computer has choosen ${getComputerChoice().toLowerCase()}`
}

//  console.log(playRound())

let playRoundII = () =>{
    let moveCombo = {
        'ROCK': {'ROCK': 'The Match is draw', 'PAPER': 'Computer wins!', 'SCISSORS': 'You scored one point!'},
    'PAPER': {'ROCK': 'You scored one point!', 'PAPER': 'The Match is draw', 'SCISSORS': 'Computer wins!'},
    'SCISSORS': {'ROCK': 'Computer wins!', 'PAPER': 'You scored one point!', 'SCISSORS': 'The Match is draw'}
    }
    
    let cc2 = getComputerChoice()
    let hc2 = getHumanChoice()

    let finalResult = moveCombo[hc2][cc2]

    if(finalResult === 'Computer wins!'){
        humanScore+=1
    } else if(finalResult === 'You scored one point!'){
        computerScore+=1
    }
    
    return finalResult
}

let playGame = () => {
for(i=0; i< 5; i++){
    playRound()
    }
}

console.log(playGame()) // The result is undefined because I have not set any functions to add points or print the results