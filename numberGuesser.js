let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/// Human Guess
const humanGuess = 5;

/// Number Generator
const generateTarget = num => { return Math.floor(Math.random()*9);}

/// Number Generator computer
const computerGuess = num => { return Math.floor(Math.random()*9);}

/// Compare Guesses
function compareGuesses (generateTarget,humanGuess,computerGuess) {
    console.log(`Human Guess: ${humanGuess} Computer Guess: ${computerGuess} Target Number: ${generateTarget}`)
    humanDifference = Math.abs (generateTarget - humanGuess)
    computerDifference = Math.abs (generateTarget - computerGuess)
    console.log(`Human Difference: ${humanDifference} Computer Difference: ${computerDifference}`)
    return humanDifference, computerDifference;
}
/// Winner declaration
function scoreCount (compareGuesses) {
    if (humanDifference < computerDifference) {
        humanScore ++;
        console.log('You Won!');
    } else if (humanDifference > computerDifference) {
        computerScore ++;
        console.log('Computer Won!')
    } else {
        console.log('Draw')
    }
    console.log(`Human Score : ${humanScore} computerScore: ${computerScore}`)
     return humanScore,computerScore}

function start() {
    scoreCount(compareGuesses(generateTarget(),humanGuess,computerGuess()));
}
console.log(start());
