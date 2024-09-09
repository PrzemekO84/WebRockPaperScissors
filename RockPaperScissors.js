
//Score
let playerScoreNumber = 0;
let computerScoreNumer = 0;

function hideRules() {

    //IDs
    const rulesSection = document.getElementById("rules");
    const gameSection = document.getElementById("game");
    const headerDiv = document.getElementById("headerDiv")

    rulesSection.style.display = "none";
    gameSection.style.display = "block"
    headerDiv.style.display = "none"
    
}

function Game(playerMove, computerMove) {
    
    //IDs
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

    gameCount(playerMove, computerMove);
    settingImage(playerMove, computerMove);
}

function Move(move) {

    //IDs
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

function gameCount(playerMove, computerMove){

    //Ids
    let countText;
    const mainMoveBox = document.getElementById("mainMoveBox");
    const gameCount = document.getElementById("gameCount");
    const noneDiv = document.getElementsByClassName("noneDiv");

    //Creating Counter elements
    const counterDiv = document.createElement("div");
    const counterH1 = document.createElement("h1");

    counterDiv.id = "counterDiv";
    counterH1.id = "counterH1";
    

    //Hiding mainMoveBox
    mainMoveBox.style.display = "none";

    gameCount.style.display = "block"

    //Adding counter to the document
    document.getElementById("gameCount").append(counterDiv);
    document.getElementById("counterDiv").append(counterH1);

    console.log(counterH1.textContent);
    
    counterH1.textContent = "ROCK! 🪨";

    let countingInterval = setInterval(() => {
        if(counterH1.textContent === "ROCK! 🪨"){
            countText = "PAPER! 📄";
        }
        else if(counterH1.textContent === "PAPER! 📄"){
            countText = "SCISSORS! ✂️";

            setTimeout(() => {
                counterDiv.style.display = "none";
                for(let index = 0; index < noneDiv.length; index++){
                    noneDiv[index].style.display = "flex";  
                }
            }, 1000);

            clearInterval(countingInterval);
        }
        counterH1.textContent = countText;
        
    }, 1000);

}

function settingImage(playerMove, computerMove){

    const playerMovePicture = document.getElementById("playerMovePicture");
    const vsPicture = document.getElementById("vsPicture");
    const computerMovePicture = document.getElementById("computerMovePicture");
    const playerMoveText = document.getElementById("playerMove");
    const computerMoveText = document.getElementById("computerMove");

    switch(playerMove){
        case "rock":
            playerMovePicture.src = "Images/rockImage.png";
            playerMoveText.textContent = "Rock"
            break;
        case "paper":
            playerMovePicture.src = "Images/paperImage.png";
            playerMoveText.textContent = "Paper"
            break;
        case "scissors":
            playerMovePicture.src = "Images/scissorsImage.png";
            playerMoveText.textContent = "Scissors"
            break;
        
    }

    switch(computerMove){
        case "rock":
            computerMovePicture.src = "Images/rockImage.png";
            computerMoveText.textContent = "Rock"
            break;
        case "paper":
            computerMovePicture.src = "Images/paperImage.png";
            computerMoveText.textContent = "Paper"
            break;
        case "scissors":
            computerMovePicture.src = "Images/scissorsImage.png";
            computerMoveText.textConent = "Scissors" 
            break;
    }

}

