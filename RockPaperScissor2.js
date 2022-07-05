var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber =  Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    if(letter === 's') return "scissors";
    if(letter === 'l') return "lizard";
    return "spock";
}

function win(userChoice, computerChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) + ". You win!";
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " Loses To " + convertToWord(computerChoice) + ". Try Again!";
}


function draw(userChoice, computerChoice) {
    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = " Its A Draw";
}



function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'kr':
        case 'pk':
        case 'lp':
        case 'sl':
        case 'ks':
        case 'rl':
        case 'lk':
        case 'rs':
        case 'pr':
        case 'sp':   
          win(userChoice, computerChoice);
         break; 
        case 'rk': 
        case 'pk':
        case 'pl': 
        case 'ls': 
        case 'kl':
        case 'lr': 
        case 'rp':
        case 'ps':
        case 'sr':
          lose(userChoice, computerChoice);
          break;
        case 'rr':
        case 'pp':
        case 'ss':
        case 'll':
        case 'kk':        
           draw(userChoice, computerChoice);
         break;
    }
}



function main() {
    rock_div.addEventListener('click', function() {
    game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    });

    lizard_div.addEventListener('click', function() {
        game("l");
    });

    spock_div.addEventListener('click', function() {
        game("k");
    });
}

main();