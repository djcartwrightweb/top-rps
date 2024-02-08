function getComputerchoice() {
    let choice = (Math.floor(Math.random() * 3)) + 1;
    switch (choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {

        if (computerSelection == 'rock') {
            console.log('Tie! Rock vs. Rock!');
            announcer.textContent = 'Tie! Rock vs. Rock!';
            return 3;
        } else if (computerSelection == 'paper') {
            console.log('You lose! Paper beats rock!');
            announcer.textContent = 'You lose! Paper beats rock!';
            return 2;
        } else if (computerSelection == 'scissors') {
            console.log('You win! Rock beats scissors!');
            announcer.textContent = 'You win! Rock beats scissors!';
            return 1;
        }

    } else if (playerSelection == 'paper') {

        if (computerSelection == 'rock') {
            announcer.textContent = 'You win! Paper beats rock!';
            console.log('You win! Paper beats rock!');
            return 1;
        } else if (computerSelection == 'paper') {
            announcer.textContent = 'Tie! Paper vs. Paper!';
            console.log('Tie! Paper vs. Paper!');
            return 3;
        } else if (computerSelection == 'scissors') {
            announcer.textContent = 'You lose! Scissors beats paper!';
            console.log('You lose! Scissors beats paper!');
            return 2;
        }

    } else if (playerSelection == 'scissors') {

        if (computerSelection == 'rock') {
            announcer.textContent = 'You lose! Rock beats scissors!';
            console.log('You lose! Rock beats scissors!');
            return 2;
        } else if (computerSelection == 'paper') {
            announcer.textContent = 'You win! Scissors beats paper!';
            console.log('You win! Scissors beats paper!');
            return 1;
        } else if (computerSelection == 'scissors') {
            announcer.textContent = 'Tie! Scissors vs. Scissors!';
            console.log('Tie! Scissors vs. Scissors');
            return 3;
        }

    }
}

function runScoreBoard(roundResult) {
    let winNum = parseInt(wins.textContent);
    let lossNum = parseInt(losses.textContent);

    switch (roundResult) {
        case 1:
            winNum += 1;
            break;
        case 2:
            lossNum += 1;
            break;
        case 3:
            break;
    }

    wins.textContent = winNum;
    losses.textContent = lossNum;

    if (winNum >= 5) {
        alert('You win!');
        resetGame();
    } else if (lossNum >= 5) {
        alert('You lose!');
        resetGame();
    }
}

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', () => {
    let roundResult = playRound('rock', getComputerchoice());
    runScoreBoard(roundResult);
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', () => {
    let roundResult = playRound('paper', getComputerchoice()); 
    runScoreBoard(roundResult);
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', () => {
    let roundResult = playRound('scissors', getComputerchoice()); 
    runScoreBoard(roundResult);
});

const wins = document.getElementById('wins');
const losses = document.getElementById('losses');

const announcer = document.getElementById('announcer');

function resetGame() {
    wins.textContent = 0;
    losses.textContent = 0;
    announcer.textContent = 'Please click a button to begin...';
    console.clear();
}