
function getComputerChoice() {
    let x = Math.random()

    if (x < 0.33) {
        return 'rock'
    } else if (x < 0.66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    return prompt('rock, paper or scissors?')
}

let humanScore = 0;
let compurterScore = 0;

function playRound(humanChoice, computerChoice) {
let human = humanChoice.toLowerCase();

if (human ==='rock' && computerChoice === 'rock'){
    console.log('Draw')
} else if (human === 'rock' && computerChoice === 'paper') {
    console.log('You lose! Paper beats Rock')
} else if (human === 'rock' && computerChoice === 'scissors') {
    console.log('You win! Rock beats Scissors')
} else if (human === 'paper' && computerChoice === 'rock') {
    console.log('You win! Paper beats Rock') 
} else if (human === 'paper' && computerChoice === 'paper') {
    console.log('Draw')
} else if (human === 'paper' && computerChoice === 'scissors') {
    console.log('You lose! Scissors beats Paper')
} else if (human === 'scissors' && computerChoice === 'rock') {
    console.log('You lose! Rock beats Scissors')
} else if (human === 'scissors' && computerChoice === 'paper') {
    console.log('You win! Scissors beats Paper')
} else if (human === 'scissors' && computerChoice === 'scissors') {
    console.log('Draw') 
}
}

playRound(getHumanChoice(), getComputerChoice())