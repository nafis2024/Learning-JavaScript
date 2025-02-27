// ~here's my plan~~
//two array with forLoop that stretch to 100 {DONE}
//function that displays two Arrays with combinations.. using random() {DONE}

// buttonClicks > gameStarts = gameStarter
// inside >>> .

//gameStarter > wrongAns = wrongAnsDisplay
//gameStarter > rightAns = rightAnsDisplay

const graterThanMax = 101;

let firstValue = [];
let secondValue = [];
for (let i = 1; i < graterThanMax; i++) {
    firstValue.push(i);
    secondValue.push(i);
} //TEST PASSED

let randomNumber = () => {
    return Math.floor(Math.random() * graterThanMax);
} //TEST PASSED

let randomOperator = () => {
    let operators = ['+', '-', '*', '/'];
    return operators[Math.floor(Math.random() * operators.length)];
} //TEST PASSED

let questionMaker = () => {
    let num1 = firstValue[randomNumber()];
    let num2 = secondValue[randomNumber()];
    let operator = randomOperator();
    let questionXYZ = `${num1} ${operator} ${num2} = ?`;

    let answerFinder = function(num1, num2, operator) {
        switch (operator) {
            case '+': return num1 + num2;
            case '-': return num1 - num2;
            case '*': return num1 * num2;
            case '/': return num2 !== 0 ? num1 / num2 : 'undefined'; // Prevent division by zero
            default: return 'Invalid operator';
        }
    }

    let rawAnswer = answerFinder(num1, num2, operator);
    let answer = parseFloat(rawAnswer.toFixed(1)); // Rounding off to one decimal place

    // Return the values as an object
    return {
        questionXYZ: questionXYZ,
        answer: answer
    };
}

startGame.addEventListener('click', () => {
    // Generate a new question
    let { questionXYZ, answer } = questionMaker();
    currentAnswer = answer;

    // Display the question
    questionElement.textContent = questionXYZ;

    // Clear previous results and input
    errorMsg.textContent = '';
    result.textContent = '';
    userAnswerInput.value = ''; // Clear input field
});

submitBtn.addEventListener('click', () => {
    let userAnswer = parseFloat(userAnswerInput.value);

    // Check if the user answer is correct
    if (userAnswer === currentAnswer) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        errorMsg.textContent = `Wrong answer! The correct answer was ${currentAnswer}.`;
        errorMsg.style.color = 'red';
    }
});

//even chatGPT can't make it work.. who am I to make it?
