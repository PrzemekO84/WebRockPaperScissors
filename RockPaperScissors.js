
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
    const continueDiv = document.getElementById("continueDiv");
    const continueH1 = document.getElementById("continueH1");
    const continueBtn = document.getElementById("continueBtn");
    const counterDiv = document.getElementById("counterDiv");
    const counterH1 = document.getElementById("counterH1");
    const gameText = document.getElementById("gameText");

    console.log("Hiding game count and main move box");
    gameCountDiv.style.display = "none"
    mainMoveBox.style.display = "block"

    //Continue

    console.log("hiding continue stuff");
    continueDiv.style.display = "none";
    continueH1.style.display = "none";
    continueBtn.style.display = "none";

    // GameCounter

    console.log("hiding game counter");
    counterDiv.style.display = "none";
    counterH1.style.display = "none";

    //Main Move Box
    gameText.style.display = "block";

}

function Game(playerMove, computerMove) {
    
    //IDs
    let win = ""
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    // Game Logic

    switch(playerMove){
        case "rock":
            if(computerMove === "paper"){
                computerScoreNumber++;
                win = "computer";
                
            }
            else if(computerMove === "scissors"){
                playerScoreNumber++;
                win = "player";
            }
            else{
                win = "draw";
            }
            break;
        case "paper":
            if(computerMove === "rock"){
                playerScoreNumber++;
                win = "player";
            }
            else if(computerMove === "scissors"){
                computerScoreNumber++;
                win = "computer";
            }
            else{
                win = "draw";
            }
            break;
        case "scissors":
            if(computerMove === "rock"){
                computerScoreNumber++;
                win = "computer";
            }
            else if(computerMove === "paper"){
                playerScoreNumber++;
                win = "player";
            }
            else{
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
    let computerRandomNumber;
    const gameText = document.getElementById("gameText");
    const gameCount = document.getElementById("gameCount");

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

    gameText.style.display = "none";

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
        let counterDiv = document.getElementById("counterDiv");
        let counterH1 = document.getElementById("counterH1");

        console.log("game counts elements display to flex and block");

        if(!counterDiv && !counterH1){
            console.log("Creating counter Div");
            counterDiv = document.createElement("div");

            console.log("Creating Counter H1");
            counterH1 = document.createElement("h1")

            counterDiv.id = "counterDiv";
            counterH1.id = "counterH1";

            counterDiv.className = "counterDiv";
            counterH1.className = "counterH1";
        }

        counterDiv.style.display = "flex";
        counterH1.style.display = "block";

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
        setTimeout(() => {
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
            resolve();
        }, 500);
        
    })
}

async function Continue(playerMove, computerMove, win){

    const noneDiv = document.getElementsByClassName("noneDiv");
    
    
    await gameCount(playerMove, computerMove);
    
    await settingImage(playerMove, computerMove);

    await new Promise((resolve) => {
        setTimeout(() => {

            const playerScoreText = document.getElementById("playerScore");
            const computerScoreText = document.getElementById("computerScore");

            for(let index = 0; index < noneDiv.length; index++){
                noneDiv[index].style.display = "none";  
            }
            

            playerScoreText.textContent = `Player score: ${playerScoreNumber}`;
            computerScoreText.textContent = `Computer score: ${computerScoreNumber}`;

            resolve();
        }, 5000);
    });

    let continueDiv = document.getElementById("continueDiv");
    let continueH1 = document.getElementById("continueH1");
    let continueBtn = document.getElementById("continueBtn");

    console.log("Setting continue objects to be visible");

    if(!continueDiv && !continueH1 && !continueBtn){

        console.log("Creating continue Div");
        console.log("Creating continue H1");
        console.log("Creating continue Button");

        continueDiv = document.createElement("div");
        continueH1 = document.createElement("h1");
        continueBtn = document.createElement("button")

        continueDiv.id = "continueDiv";
        continueH1.id = "continueH1";
        continueBtn.id = "continueBtn"
    }

    continueDiv.style.display = "flex";
    continueH1.style.display = "block";
    continueBtn.style.display = "block";

    
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


