function ComputerChoice() {
    let random = parseInt(Math.random() * 3)
    let choice = ""

    switch(random){
        case 0:
            choice = "rock"
          break;

        case 1:
            choice = "paper"
          break;

        case 2:
             choice = "scissors"
          break;
    } 

    return choice
}

function GetHumanChoice() {
    let input = prompt("Rock, Paper or Scissors")
    let player_choice = input.toLowerCase()    
    while(player_choice != "rock" || player_choice != "paper" || player_choice != "scissors"){
        if (player_choice === "rock" || player_choice === "paper" || player_choice === "scissors") {
            break
        }
        input = prompt("Rock, Paper or Scissors")
        player_choice = input.toLowerCase()
    }
    

    return player_choice
}

let Humanscore = 0
let Computerscore = 0

function playRound(HC,CC) {
    let r_p = " Paper beats rock!"
    let p_s = " Scissors beats paper!"
    let r_s = " Rock beats scissors!"
    let win = "You win!"
    let lose = "You lose!"
    let tie = "It's a tie!"
    let message = ""

    if (HC === "rock"){
        if (CC === "rock"){
            message = tie
        }
        else if(CC === "paper"){
            message = lose + r_p
            Computerscore++
        }
        else{
            message = win + r_s
            Humanscore++
        }
    }
    if (HC === "paper"){
        if (CC === "rock"){
            message = win + r_p
            Humanscore++
        }
        else if(CC === "paper"){
            message = tie
        }
        else{
            message = lose + p_s
            Computerscore++
        }
    }
    if (HC === "scissors"){
        if (CC === "rock"){
            message = lose + r_s
            Computerscore++
        }
        else if(CC === "paper"){
            message = win + p_s
            Humanscore++
        }
        else{
            message = tie
        }
    }

    return message
}

function playGame() {
    for (let i = 0;i < 5;i++){
        console.log(playRound(GetHumanChoice(),ComputerChoice()))
        console.log(Humanscore + " - " + Computerscore)
    }
}

playGame()