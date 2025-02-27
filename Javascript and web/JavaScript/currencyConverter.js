const prompt = require("prompt-sync")();


/**
 * class terminalConverter {
    constructor(input, amount, output){
        this.input = prompt('Which currency are you converting from?')
        this.amount = prompt('The amount you want to convert?')
        this.output = prompt('Which currency you want in return?')

        var converter = (input, amount, output) => {
            let allCurrency = {
                'BDT': 110,
                'INR': 95,     
                'KWD': 0.3,
                'SD': 1.35,
                'SR': 3.75,
            }
            let tempOutputUSD = (1 / allCurrency[input]) * amount ;
            let desiredCurrency = tempOutputUSD * allCurrency[output] ;
            return desiredCurrency
        }        
    }
}

let bdtToKwd = new terminalConverter
console.log(bdtToKwd) */




var converter = () => {

    let input =  prompt('Which currency are you converting from?')
    let amount =  parseFloat(prompt('The amount you want to convert?'))
    let output = prompt('Which currency you want in return?')

    let allCurrency = {
        'BDT': 110,
        'INR': 95,     
        'KWD': 0.3,
        'SD': 1.35,
        'SR': 3.75,
    }
    if(!allCurrency[input]){                         // != doesn't work in here, maybe not for objects 
        return `This program is unable to convert in ${input}.. Please choose another.`
    }else if(isNaN(amount)){                         // amount = NaN doesn't work either
        return `The amount has to be a number!`
    }else{
        let tempOutputUSD = (1 / allCurrency[input]) * amount ;
        let desiredCurrency = tempOutputUSD * allCurrency[output] ;
        return desiredCurrency.toFixed(2)
    }   
}   

console.log(converter())




// I used chatGPT to fix the mistakes and make the code more efficient.. 

