var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var rock_div = document.getElementById("rock"); 
var paper_div = document.getElementById("paper"); 
var scissors_div = document.getElementById("scissors");
var result_div = document.querySelector(".result")
var reset_button = document.querySelector(".reset")

var subUser = "(User)".fontsize(3).sub();
var subComp = "(Comp)".fontsize(3).sub();


function changeChoice(choice){
  if (choice === 'r') return 'Rock';
  if (choice === 'p') return 'Paper';
  if (choice === 's') return 'Scissors';
}


function win(userChoice,computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${changeChoice(userChoice)} ${subUser} beats ${changeChoice(computerChoice)} ${subComp} ,You Win!!`;

  let selectId = document.getElementById(changeChoice(userChoice).toLowerCase());
  selectId.classList.add('green-glow');
  setTimeout(() => {
   selectId.classList.remove('green-glow');
  }, "150");

}
function lose(userChoice,computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${changeChoice(computerChoice)} ${subComp} beats ${changeChoice(userChoice)} ${subUser} ,You Lose!!`;

  let selectId = document.getElementById(changeChoice(userChoice).toLowerCase());
  selectId.classList.add('red-glow');
  setTimeout(() => {
   selectId.classList.remove('red-glow');
  }, "150");
}
function draw(userChoice,computerChoice){
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;

  result_div.innerHTML = `${changeChoice(userChoice)} ${subUser} is equal to ${changeChoice(computerChoice)} ${subComp} ,It's a Draw!!`;

  let selectId = document.getElementById(changeChoice(userChoice).toLowerCase());
  selectId.classList.add('gray-glow');
  setTimeout(() => {
   selectId.classList.remove('gray-glow');
  }, "150");
}


function getCompChoice(){
 var choices = ['r','p','s'];
 var randomNumber = Math.floor(Math.random()*3);
return choices[randomNumber];
}

function play(userChoice){
  var computerChoice = getCompChoice();
  switch (userChoice + computerChoice){
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice,computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice,computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice,computerChoice);
  }
}


function main(){
  rock_div.addEventListener('click', () => {
    play('r');
  });

  paper_div.addEventListener('click', () => {
    play('p');
  });

  scissors_div.addEventListener('click', () => {
    play('s');
  });

  reset_button.addEventListener('click',  () => {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
  });

}

main();