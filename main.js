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
    let count = 0;
    let result;
    for(let i = 0; i <5; i++){
       computerSelection = getComputerChoise();
       result =  play(playerSelection,computerSelection);
       console.log(result);
       if(result.charAt(4)=='W'){
        count += 1;
       }
    }
    return count;
}



let computerSelection;
let playerSelection = prompt("Rock, Paper or Scissors")
playerSelection = new RegExp(playerSelection, 'i')
console.log(`You Won ${game(playerSelection)} times`)

