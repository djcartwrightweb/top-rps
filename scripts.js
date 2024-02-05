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
            return 3;
        } else if (computerSelection == 'paper') {
            console.log('You lose! Paper beats rock!');
            return 2;
        } else if (computerSelection == 'scissors') {
            console.log('You win! Rock beats scissors!');
            return 1;
        }

    } else if (playerSelection == 'paper') {

        if (computerSelection == 'rock') {
            console.log('You win! Paper beats rock!');
            return 1;
        } else if (computerSelection == 'paper') {
            console.log('Tie! Paper vs. Paper');
            return 3;
        } else if (computerSelection == 'scissors') {
            console.log('You lose! Scissors beats paper!');
            return 2;
        }

    } else if (playerSelection == 'scissors') {

        if (computerSelection == 'rock') {
            console.log('You lose! Rock beats scissors!');
            return 2;
        } else if (computerSelection == 'paper') {
            console.log('You win! Scissors beats paper');
            return 1;
        } else if (computerSelection == 'scissors') {
            console.log('Tie! Scissors vs. Scissors');
            return 3;
        }

    }
}

function playGame() {

    let winner = false;
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    do {

        let playerSelection = '';
        while ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')) {
            playerSelection = prompt('Rock, paper, or scissors?').toLowerCase();
            console.log(playerSelection);
        }
        
        //1 = win, 2 = loss, 3 = tie
        let scoreNum = playRound(playerSelection, getComputerchoice());
        switch (scoreNum) {
            case 1:
                playerScore += 1;
                break;
            case 2:
                computerScore += 1;
                break;
            case 3:
                ties += 1;
                break;
        }

        console.log(`wins: ${playerScore}, losses: ${computerScore}, ties: ${ties}`);

        if (playerScore >= 5 || computerScore >= 5) {
            winner = true;
        }

    } while(!winner)

}


playGame();

//***  tests  ***//
// const playerSelection = 'paper';
//console.log(playRound(playerSelection, getComputerchoice()));


