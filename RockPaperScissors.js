

let playerScoreNumber = 0;
let computerScoreNumer = 0;

function hideRules() {
    const rulesSection = document.getElementById("rules");
    const gameSection = document.getElementById("game");
    const headerDiv = document.getElementById("headerDiv")

    rulesSection.style.display = "none";
    gameSection.style.display = "block"
    headerDiv.style.display = "none"
    
}

function Game(playerMove, computerMove) {
    
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const playerScoreText = document.getElementById("playerScore");
    const computerScoreText = document.getElementById("computerScore");

    console.log(`Player move is ${playerMove}`);
    console.log(`Computer move is ${computerMove}`);

    // Game Logic

    switch(playerMove){
        case "rock":
            if(computerMove === "paper"){
                console.log("computer choosed paper = paper wins with rock");
                console.log("Computer wins");
                computerScoreNumer++;
            }
            else if(computerMove === "scissors"){
                console.log("computer choosed scissors = scissors lose with rock");
                console.log("Player wins");
                playerScoreNumber++;
            }
            else{
                console.log("draw");
            }
            break;
        case "paper":
            if(computerMove === "rock"){
                console.log("computer choosed rock = paper wins with rock");
                console.log("Player wins");
                playerScoreNumber++;
            }
            else if(computerMove === "scissors"){
                console.log("computer choosed scissors = scissors wins with paper");
                console.log("Computer wins");
                computerScoreNumer++;
            }
            else{
                console.log("draw");
            }
            break;
        case "scissors":
            if(computerMove === "rock"){
                console.log("computer choosed rock = rock wins with scissors");
                console.log("Computer wins");
                computerScoreNumer++;
            }
            else if(computerMove === "paper"){
                console.log("computer choosed paper = scissors wins with paper");
                console.log("Player wins");
                playerScoreNumber++;
            }
            else{
                console.log("draw");
            }
            break;
    }

    playerScoreText.textContent = `Player score: ${playerScoreNumber}`;
    computerScoreText.textContent = `Computer score: ${computerScoreNumer}`;
}

function Move(move) {

    let playerMove;
    let computerMove;
    let computerRandomNumber

    // PlayerMove

    if (move.id === rock.id){
        playerMove = "rock"
    }
    else if (move.id === paper.id){
        playerMove = "paper"
    }
    else{
        playerMove = "scissors"
    }

    //ComputerMove

    computerRandomNumber = Math.floor(Math.random() * 3)

    if (computerRandomNumber === 0){
        computerMove = "rock";
    }
    else if (computerRandomNumber === 1){
        computerMove = "paper";
    }
    else{
        computerMove = "scissors";
    }

    Game(playerMove, computerMove)
}

