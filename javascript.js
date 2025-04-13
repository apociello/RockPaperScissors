
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
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
let human = humanChoice.toLowerCase();

    if (human ==='rock' && computerChoice === 'rock'){
        console.log('The computer says: Rock')
        console.log('Draw')
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'rock' && computerChoice === 'paper') {
        console.log('The computer says: Paper')
        console.log('You lose! Paper beats Rock')
        computerScore += 1
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'rock' && computerChoice === 'scissors') {
        console.log('The computer says: Scissors')
        console.log('You win! Rock beats Scissors')
        humanScore += 1
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'paper' && computerChoice === 'rock') {
        console.log('The computer says: Rock')
        console.log('You win! Paper beats Rock') 
        humanScore += 1
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'paper' && computerChoice === 'paper') {
        console.log('The computer says: Paper')
        console.log('Draw')
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'paper' && computerChoice === 'scissors') {
        console.log('The computer says: Scissors')
        console.log('You lose! Scissors beats Paper')
        computerScore += 1
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'scissors' && computerChoice === 'rock') {
        console.log('The computer says: rock')
        console.log('You lose! Rock beats Scissors')
        computerScore += 1
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'scissors' && computerChoice === 'paper') {
        console.log('The computer says: Paper')
        console.log('You win! Scissors beats Paper')
        humanScore += 1
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    } else if (human === 'scissors' && computerChoice === 'scissors') {
        console.log('The computer says: Scissors')
        console.log('Draw') 
        console.log('Human Score: ' + humanScore)
        console.log('Computer Score: ' + computerScore)
    }
    }


/*function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
  
    if (humanScore === computerScore) {
        console.log('FINAL RESULT: DRAW')
    } else if (humanScore > computerScore) {
        console.log('FINAL RESULT: HUMAN WINS')
    } else {
        console.log('FINAL RESULT: COMPUTER WINS')
    }
}
playGame()
*/ 

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice())
})

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice())
})

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice())
})