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
    if (playerSelection.toLowerCase() == 'rock') {

        if (computerSelection == 'rock') {
            return 'Tie! Rock vs. Rock!';
        } else if (computerSelection == 'paper') {
            return 'You lose! Paper beats rock!';
        } else if (computerSelection == 'scissors') {
            return 'You win! Rock beats scissors!';
        }

    } else if (playerSelection.toLowerCase() == 'paper') {

        if (computerSelection == 'rock') {
            return 'You win! Paper beats rock!';
        } else if (computerSelection == 'paper') {
            return 'Tie! Paper vs. Paper';
        } else if (computerSelection == 'scissors') {
            return 'You lose! Scissors beats paper!';
        }

    } else if (playerSelection.toLowerCase() == 'scissors') {

        if (computerSelection == 'rock') {
            return 'You lose! Rock beats scissors!';
        } else if (computerSelection == 'paper') {
            return 'You win! Scissors beats paper';
        } else if (computerSelection == 'scissors') {
            return 'Tie! Scissors vs. Scissors';
        }

    }
}




//***  tests  ***//
// const playerSelection = 'paper';
//console.log(playRound(playerSelection, getComputerchoice()));


