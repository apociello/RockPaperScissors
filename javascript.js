

let output = document.querySelector("#output");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");



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

        p1.textContent = 'The computer says: Rock';
        p2.textContent = 'Draw';
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'rock' && computerChoice === 'paper') {
        p1.textContent = 'The computer says: Paper';
        p2.textContent = 'You lose! Paper beats Rock';
        computerScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'rock' && computerChoice === 'scissors') {
        p1.textContent = 'The computer says: Scissors';
        p2.textContent = 'You win! Rock beats Scissors';
        humanScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'paper' && computerChoice === 'rock') {
        p1.textContent = 'The computer says: Rock';
        p2.textContent = 'You win! Paper beats Rock';
        humanScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'paper' && computerChoice === 'paper') {
        p1.textContent = 'The computer says: Paper';
        p2.textContent = 'Draw';
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'paper' && computerChoice === 'scissors') {
        p1.textContent = 'The computer says: Scissors';
        p2.textContent = 'You lose! Scissors beats Paper';
        computerScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'scissors' && computerChoice === 'rock') {
        p1.textContent = 'The computer says: rock';
        p2.textContent = 'You lose! Rock beats Scissors';
        computerScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'scissors' && computerChoice === 'paper') {
        p1.textContent = 'The computer says: Paper';
        p2.textContent = 'You win! Scissors beats Paper';
        humanScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (human === 'scissors' && computerChoice === 'scissors') {
        p1.textContent = 'The computer says: Scissors';
        p2.textContent = 'Draw';
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;
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

