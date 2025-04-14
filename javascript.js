

let output = document.querySelector("#output");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let h1 = document.querySelector('h1');

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

let humanScore = 0;
let computerScore = 0;


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

function playRound(humanChoice, computerChoice) {

    if (h1.textContent) {
        h1.textContent = '';
        humanScore = 0;
        computerScore = 0;
    }

    if (humanChoice ==='rock' && computerChoice === 'rock'){

        p1.textContent = 'The computer says: Rock';
        p2.textContent = 'Draw';
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        p1.textContent = 'The computer says: Paper';
        p2.textContent = 'You lose! Paper beats Rock';
        computerScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        p1.textContent = 'The computer says: Scissors';
        p2.textContent = 'You win! Rock beats Scissors';
        humanScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        p1.textContent = 'The computer says: Rock';
        p2.textContent = 'You win! Paper beats Rock';
        humanScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        p1.textContent = 'The computer says: Paper';
        p2.textContent = 'Draw';
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        p1.textContent = 'The computer says: Scissors';
        p2.textContent = 'You lose! Scissors beats Paper';
        computerScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        p1.textContent = 'The computer says: rock';
        p2.textContent = 'You lose! Rock beats Scissors';
        computerScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        p1.textContent = 'The computer says: Paper';
        p2.textContent = 'You win! Scissors beats Paper';
        humanScore += 1
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;

    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        p1.textContent = 'The computer says: Scissors';
        p2.textContent = 'Draw';
        p3.textContent = `Human Score: ${humanScore} || Computer Score: ${computerScore}`;
    }

    if (humanScore == 5 || computerScore == 5) {
        finalResult(humanScore, computerScore)
    };
    }

function finalResult(humanScore, computerScore) {
    if (humanScore === computerScore) {
        h1.textContent = 'FINAL RESULT: DRAW';
    } else if (humanScore > computerScore) {
        h1.textContent = 'FINAL RESULT: HUMAN WINS';
    } else {
        h1.textContent = 'FINAL RESULT: COMPUTER WINS'
    }
}
