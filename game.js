function computerPlay() {
    let val = Math.floor(Math.random()*3);
    if(val == 0) return "rock";
    else if(val == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection) return "Tied!";
    else if(playerSelection == "rock"){
        if(computerSelection == "paper") return "You Lose! Paper Beats Rock";
        else return "You Win!";
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors") return "You Lose! Scissors Beat Paper";
        else return "You Win!";
    }
    else if(playerSelection == "scissors"){
        if(computerSelection == "rock") return "You Lose! Rock Beats Scissors";
        else return "You Win!";
    }
}


function game() {
    let player = 0;
    let computer = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = window.prompt("Enter here!");
        const computerSelection = computerPlay();
        if(playRound(playerSelection, computerSelection) == "Tied!") {
            console.log(playRound(playerSelection, computerSelection));
            continue;
        }
        else if(playRound(playerSelection, computerSelection) == "You Win!") {
            console.log(playRound(playerSelection, computerSelection));
            player++;
        }
        else {
            console.log(playRound(playerSelection, computerSelection));
            computer++;
        }
    }
    if(computer == player)return "Match Tied!";
    else if(computer > player) return "You Lose!";
    else return "You Win!";
    
}