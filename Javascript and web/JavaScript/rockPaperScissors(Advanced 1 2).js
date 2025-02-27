function getComputerChoice() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const prompt = require("prompt-sync")();

function getHumanChoice() {
    while (true) {
        let x = prompt('What do you choose? Rock? Paper? Scissors?').toUpperCase();
        if (['ROCK', 'PAPER', 'SCISSORS'].includes(x)) {
            return x;
        }
        console.log('Please provide a valid answer!');
    }
}

//============================
//ADVANCED AND EFFICIENT CODE 1
let p = 'PAPER';
let s = 'SCISSORS';
let r = 'ROCK';

let outcomes = {
    'ROCK': {'ROCK': 'The Match is draw', 'PAPER': 'Computer wins!', 'SCISSORS': 'You scored one point!'},
    'PAPER': {'ROCK': 'You scored one point!', 'PAPER': 'The Match is draw', 'SCISSORS': 'Computer wins!'},
    'SCISSORS': {'ROCK': 'Computer wins!', 'PAPER': 'You scored one point!', 'SCISSORS': 'The Match is draw'}
};

let humanScore = 0;
let computerScore = 0;

var playRound = () => {
    let cc = getComputerChoice();
    let hc = getHumanChoice();

    let result = outcomes[hc][cc];

    if (result === 'Computer wins!') {
        computerScore += 1;
    } else if (result === 'You scored one point!') {
        humanScore += 1;
    }

    return result;
};



//============================
//ADVANCED AND EFFICIENT CODE 2
class RockPaperScissors {
    constructor() {
        this.p = 'PAPER';
        this.s = 'SCISSORS';
        this.r = 'ROCK';
        this.humanScore = 0;
        this.computerScore = 0;
        this.outcomes = {
            'ROCK': {'ROCK': 'The Match is draw', 'PAPER': 'Computer wins!', 'SCISSORS': 'You scored one point!'},
            'PAPER': {'ROCK': 'You scored one point!', 'PAPER': 'The Match is draw', 'SCISSORS': 'Computer wins!'},
            'SCISSORS': {'ROCK': 'Computer wins!', 'PAPER': 'You scored one point!', 'SCISSORS': 'The Match is draw'}
        };
    }

    playRound() {
        let cc = getComputerChoice();
        let hc = getHumanChoice();

        let result = this.outcomes[hc][cc];

        if (result === 'Computer wins!') {
            this.computerScore += 1;
        } else if (result === 'You scored one point!') {
            this.humanScore += 1;
        }

        return result;
    }
}

let game = new RockPaperScissors();
console.log(game.playRound());
