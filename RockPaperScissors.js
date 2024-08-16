

function hideRules() {
    const rulesSection = document.getElementById("rules");
    const gameSection = document.getElementById("game");
    const headerDiv = document.getElementById("headerDiv")

    rulesSection.style.display = "none";
    gameSection.style.display = "block"
    headerDiv.style.display = "none"
    
}

function Game() {


    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");

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


    console.log(`Player move is ${playerMove}`);
    console.log(`Computer move is ${computerMove}`);

    return {playerMove, computerMove}
}

