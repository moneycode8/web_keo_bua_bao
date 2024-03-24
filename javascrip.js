function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playround(player, computer) {
  if (player == computer) {
    console.log("computer choice: " + computer + " and your choice: " + player);
    console.log("It's a tie!");
  } else if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {
    console.log("computer choice: " + computer + " and your choice: " + player);
    console.log("You win!");
  } else {
    console.log("computer choice: " + computer + " and your choice: " + player);
    console.log("You lose!");
  }
}

let a = prompt("what you want to play rounds ? ");
function rounds(a){
  for(let i = 0 ; i < a ; i++){
    let player = prompt("rock , parper or scissors ?");
    let playerpchoice = player.toLowerCase();
    let computerchoice = getComputerChoice();
    playround(playerpchoice,computerchoice);
  }
}
rounds(a);
