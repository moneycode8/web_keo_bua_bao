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
  let winroud =4;
  if (player == computer) {
    alert("computer choice: " + computer + " and your choice: " + player);
  } else if ((player === "rock" && computer === "scissors") || (player === "scissors" && computer === "paper") || (player === "paper" && computer === "rock")) {
    alert("computer choice: " + computer + " and your choice: " + player);
    winroud ++;
    if(winroud === 5){
      let text = document.querySelector('p');
      text.textContent = 'YOU WIN !!';
      winroud = 0;
      alert(text.textContent);
    }
  } else {
    alert("computer choice: " + computer + " and your choice: " + player);
  }
}
let menu = document.querySelector("#menu");
menu.addEventListener('click', (event) =>
 {
  let target = event.target;
  switch(target.id){
    case 'rock': playround('rock',getComputerChoice()) ;break;
    case 'paper':playround('paper',getComputerChoice()) ;break;
    default:playround('scissors',getComputerChoice());
  }
 });
