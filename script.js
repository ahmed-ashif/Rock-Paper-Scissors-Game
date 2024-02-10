const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const resetBtn = document.querySelector(".resetBtn");

let userScore = 0;
let compScore = 0;

//User's click 
choices.forEach( (choice) => {
  choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//Generate Computer Choice
const genCompChoice = () =>{
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3); //To generate random number between 0,1 & 2
  return options[randIdx];
};

//Playing the game
const playGame = (userChoice) =>{
  //Generate computer choice
  const compChoice = genCompChoice();

  if(userChoice === compChoice){
    drawGame(userChoice);
  }
  else {
    let userWin = true;

    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userWin = compChoice === "scissor" ? false : true;
    }else{
      userWin = compChoice ==="rock" ? false : true;
    }
    showWinner(userWin , userChoice, compChoice);
  }
};

//Display Draw
const drawGame = (userChoice) => {
  msg.innerText = `It's a Draw! Both chose ${userChoice}`;
  msg.style.backgroundColor = "#081b31";
};

//Displaying Winner in the paragraph
const showWinner = (userWin, userChoice, compChoice) => {
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
   }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
};

//Reset button function
const resetGame = () =>{
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  console.log(`Comp score is ${compScore} and User score is ${userScore}`);
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "#081b31";
};

resetBtn.addEventListener("click",resetGame); 