
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

    gameCount(playerMove, computerMove)
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
    const playerMovePicture = document.getElementById("playerMovePicture");
    const vsPicture = document.getElementById("vsPicture");
    const computerMovePicture = document.getElementById("computerMovePicture");
    const noneObjects = document.getElementsByClassName("noneObjects");
    const countOptionBox = document.getElementById("countOptionBox");

    //Creating Counter elements
    const counterDiv = document.createElement("div");
    const counterH1 = document.createElement("h1");

    counterDiv.id = "counterDiv";
    counterH1.id = "counterH1";
    

    //Hiding mainMoveBox
    mainMoveBox.style.display = "none";

    gameCount.style.display = "block";

    //Adding counter to the document
    counterH1.textContent = "rock paper scissors";
    document.getElementById("gameCount").append(counterDiv);
    document.getElementById("counterDiv").append(counterH1);
    // document.getElementById("gameCount").append(counterDiv)
    // document.getElementById("gameCount").append(counterH1);

    // setTimeout( () => {
    //     for(let i = 0; i < noneObjects.length; i++){
    //         noneObjects[i].style.display = "block";
    //         countOptionBox.style.height = "500px";
    //         counterDiv.style.display = "none"
    //     }
    // }, 2000)

    console.log(counterH1.textContent);
    
    // let counter = 0;
    // let = probaXD = setInterval(() => {
    //     console.log(`Siema`);
    //     counter++;
    //     console.log(counter);
    //     console.log(interval);
    //     if(counter === 5){
    //         clearInterval(probaXD);
    //     }
    // }, 1000);
    counterH1.textContent = "ROCK! 🪨";

    let countingInterval = setInterval(() => {
        if(counterH1.textContent === "ROCK! 🪨"){
            countText = "PAPER! 📄";
        }
        if(counterH1.textContent === "PAPER! 📄"){
            countText = "SCISSORS! ✂️";
            clearInterval(countingInterval);
        }
        counterH1.textContent = countText;
        console.log(counterH1.textContent);
    }, 1000);
    
        



    console.log(`XDD ${playerMove}`);
    console.log(`Lol ${computerMove}`);

}

