function computerPlay() {
    let val = Math.floor(Math.random()*3);
    if(val == 0) return "rock";
    else if(val == 1) return "paper";
    else return "scissors";
}

function playRound(playerSelection){
    const computerSelection = computerPlay();
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



const buttons = document.querySelectorAll('button');
let computer = 0;
let player = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var score = playRound(button.value);
        document.getElementById('score').innerHTML = score;
        if(score == "Tied!") {
        }
        else if(score == "You Win!") {
            player++;
        }
        else {
            computer++;
        }
        let result = "play again";
        document.getElementById('running').innerHTML = "Computer: " + computer + " ,PLayer: " + player;
        if(player == 5 || computer == 5){
            if(player == 5){
                result = "You Win!";
            }
            else {
                result = "You Lose!";
            }
            player = 0;
            computer = 0;
        }
        document.getElementById('result').innerHTML = result;
    });
    
});