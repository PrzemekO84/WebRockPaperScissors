
//Score
let playerScoreNumber = 0;
let computerScoreNumber = 0;

function hideRules() {

    //IDs
    const rulesSection = document.getElementById("rules");
    const gameSection = document.getElementById("game");
    const headerDiv = document.getElementById("headerDiv")

    rulesSection.style.display = "none";
    gameSection.style.display = "block"
    headerDiv.style.display = "none"
    
}

function newGame(){

    const gameCountDiv = document.getElementById("gameCount");
    const mainMoveBox = document.getElementById("mainMoveBox");

    gameCountDiv.style.display = "none"
    mainMoveBox.style.display = "block"


    
}

function Game(playerMove, computerMove) {
    
    //IDs
    let win = ""
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    console.log(`Player move is ${playerMove}`);
    console.log(`Computer move is ${computerMove}`);

    // Game Logic

    switch(playerMove){
        case "rock":
            if(computerMove === "paper"){
                console.log("computer choosed paper = paper wins with rock");
                console.log("Computer wins");
                computerScoreNumber++;
                win = "computer";
                
            }
            else if(computerMove === "scissors"){
                console.log("computer choosed scissors = scissors lose with rock");
                console.log("Player wins");
                playerScoreNumber++;
                win = "player";
            }
            else{
                console.log("draw");
                win = "draw";
            }
            break;
        case "paper":
            if(computerMove === "rock"){
                console.log("computer choosed rock = paper wins with rock");
                console.log("Player wins");
                playerScoreNumber++;
                win = "player";
            }
            else if(computerMove === "scissors"){
                console.log("computer choosed scissors = scissors wins with paper");
                console.log("Computer wins");
                computerScoreNumber++;
                win = "computer";
            }
            else{
                console.log("draw");
                win = "draw";
            }
            break;
        case "scissors":
            if(computerMove === "rock"){
                console.log("computer choosed rock = rock wins with scissors");
                console.log("Computer wins");
                computerScoreNumber++;
                win = "computer";
            }
            else if(computerMove === "paper"){
                console.log("computer choosed paper = scissors wins with paper");
                console.log("Player wins");
                playerScoreNumber++;
                win = "player";
            }
            else{
                console.log("draw");
                win = "draw";
            }
            break;
    }

    Continue(playerMove, computerMove, win);
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

    return new Promise((resolve) => {
        //Creating Counter elements
        const counterDiv = document.createElement("div");
        const counterH1 = document.createElement("h1");

        counterDiv.id = "counterDiv";
        counterH1.id = "counterH1";

        counterDiv.className = "counterDiv";
        counterH1.className = "counterH1";


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
                resolve();
            }
            counterH1.textContent = countText;
    
        }, 1000);
        
    })


}

function settingImage(playerMove, computerMove){

    const playerMovePicture = document.getElementById("playerMovePicture");
    const vsPicture = document.getElementById("vsPicture");
    const computerMovePicture = document.getElementById("computerMovePicture");
    const playerMoveText = document.getElementById("playerMove");
    const computerMoveText = document.getElementById("computerMove");

    playerMoveText.style.fontSize = "36px"
    computerMoveText.style.fontSize = "36px"


    return new Promise((resolve) => {
        console.log("Setting images...");
        setTimeout(() => {
            switch(playerMove){
                case "rock":
                    playerMovePicture.src = "Images/rockImage.png";
                    playerMoveText.textContent = "Player: Rock"
                    break;
                case "paper":
                    playerMovePicture.src = "Images/paperImage.png";
                    playerMoveText.textContent = "Player: Paper"
                    break;
                case "scissors":
                    playerMovePicture.src = "Images/scissorsImage.png";
                    playerMoveText.textContent = "Player: Scissors"
                    break;
                
            }
        
            switch(computerMove){
                case "rock":
                    computerMovePicture.src = "Images/rockImage.png";
                    computerMoveText.textContent = "Computer: Rock"
                    break;
                case "paper":
                    computerMovePicture.src = "Images/paperImage.png";
                    computerMoveText.textContent = "Computer: Paper"
                    break;
                case "scissors":
                    computerMovePicture.src = "Images/scissorsImage.png";
                    computerMoveText.textContent = "Computer: Scissors" 
                    break;
            }
            console.log("Images set, resolving...");
            resolve();
        }, 500);
        
    })
}

async function Continue(playerMove, computerMove, win){

    const noneDiv = document.getElementsByClassName("noneDiv");
    
    
    await gameCount(playerMove, computerMove);
    
    await settingImage(playerMove, computerMove);

    console.log("Images set and game count done");

    console.log("Starting 2 sec counter");
    await new Promise((resolve) => {
        setTimeout(() => {

            const playerScoreText = document.getElementById("playerScore");
            const computerScoreText = document.getElementById("computerScore");

            for(let index = 0; index < noneDiv.length; index++){
                noneDiv[index].style.display = "none";  
            }
            

            playerScoreText.textContent = `Player score: ${playerScoreNumber}`;
            computerScoreText.textContent = `Computer score: ${computerScoreNumber}`;

            console.log("2seconds by");
            resolve();
        }, 5000);
    });

    const continueDiv = document.createElement("div");
    const continueH1 = document.createElement("h1");
    const continueBtn = document.createElement("button")

    continueDiv.id = "continueDiv";
    continueH1.id = "continueH1";
    continueBtn.id = "continueBtn"

    document.getElementById("gameCount").append(continueDiv);
    document.getElementById("continueDiv").append(continueH1);
    document.getElementById("continueDiv").append(continueBtn);

    if(win === "player"){
        continueH1.textContent = "Player Wins!"
    }
    else if(win === "computer"){
        continueH1.textContent = "Computer Wins!"
    }
    else{
        continueH1.textContent = "Draw!"
    }

    continueBtn.textContent = "Continue"

    continueBtn.onclick = newGame;

}


