let pScore = 0;
let cScore = 0;
const pScoreDiv = document.querySelector('.player');
const cScoreDiv = document.querySelector('.computer');

let computerSelection;

function getComputerChoise() {
    let rand = Math.floor(Math.random() * 3) + 1;
    switch(rand) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
};

function victoryMessage(playerSelection){
    return `You Won! ${playerSelection} beats ${computerSelection}`;
}

function defeatMessage(playerSelection){
    return `You Lost:( ${computerSelection} beats ${playerSelection}`;
}

function play(playerSelection,computerSelection){
    if(computerSelection.match(playerSelection) == computerSelection){
        return "Draw!"
    }else if ("Rock".match(playerSelection) == "Rock"){
        if (computerSelection == "Scissors"){
           return victoryMessage("Rock");
        }else if (computerSelection == "Paper"){
            return defeatMessage("Rock");
        }
    }else if ("Paper".match(playerSelection) == "Paper"){
        if (computerSelection == "Scissors") {
            return defeatMessage("Paper");
        }else if(computerSelection == "Rock"){
            return victoryMessage("Paper");
        }
    }else if ("Scissors".match(playerSelection) == "Scissors"){
        if(computerSelection == "Rock"){
            return defeatMessage("Scissors");
        }else if (computerSelection == "Paper"){
            return victoryMessage("Scissors");
        }
    }
}

function game(playerSelection) {
    const div = document.querySelector('.roundResult');
    let count = 0;
       computerSelection = getComputerChoise();
       result =  play(playerSelection,computerSelection);
       div.setAttribute('style', 'padding: 0;');  
       div.textContent = result;
       if(result.charAt(4)=='W'){
        return true;
       }
    return false;
}

function updateScore(win){
    if (win){
        pScore++;
        pScoreDiv.textContent = pScore;
    } else{
        cScore++;
        cScoreDiv.textContent = cScore;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click',(e)=>{
        updateScore(game(e.target.childNodes[0].data));
    })
})


//let playerSelection = prompt("Rock, Paper or Scissors")
//playerSelection = new RegExp(playerSelection, 'i')
//console.log(`You Won ${game(playerSelection)} times`)

