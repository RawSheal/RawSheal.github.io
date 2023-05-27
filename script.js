const box = document.getElementsByClassName("box");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");


function playAgain(){
  count = 1;
  roundCounter = 1;
  player1Score = 0;
  player2Score = 0;
  player1ScoreUpdate.textContent = 0;
  player2ScoreUpdate.textContent = 0;
  round.textContent = 1;
  winnerBox.style.display = "none";
  clearBox();
}

const winnerBox = document.getElementById("winner");
function winnerAnnouncment(){
  winnerBox.style.display = "flex";
}

const winnerName = document.getElementById("winnerName")

const drawBox = document.getElementById("draw");
function drawAnnouncment(){
  drawBox.style.display = "flex";
}
// Counters
let count = 1;

const round = document.getElementById("round");
let roundCounter = 1;

// Combos
const winCombo = [[box1,box2,box3],[box4,box5,box6],[box7,box8,box9],[box1,box4,box7],[box2,box5,box8],[box3,box6,box9],[box1,box5,box9],[box3,box5,box7]];
const drawCombo = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

// Score board Section
let player1Score = 0;
let player2Score = 0;
const player1ScoreUpdate = document.getElementById("player1Score");
const player2ScoreUpdate = document.getElementById("player2Score");

function clearBox(a,b,c) {
  for(i = 0; i < box.length; i++){
    box[i].textContent = "";
  }
  a.style.backgroundColor = "";
  b.style.backgroundColor = "";
  c.style.backgroundColor = "";

  count = 1;

};

function animateWinner1(a, b, c) {
    a.style.backgroundColor = "green";
    b.style.backgroundColor = "green";
    c.style.backgroundColor = "green";
    };

function playerScoreChecker(){
    if (player1Score === 3) {
      winnerAnnouncment()
      winnerName.textContent = "Player 1";
      return true;
    } else if (player2Score === 3) {
      winnerAnnouncment()
      winnerName.textContent = "Player 2";
      return true;
    }
    return false
}

function winner() {
  
  let isDraw = true;

  for(let i=0; i< winCombo.length; i++){
    const [a,b,c] = winCombo[i];
    const [j,k,l,m,n,o,p,q,r] = drawCombo;

    if(
      a.textContent === "O" &&
      b.textContent === "O" &&
      c.textContent === "O"
    ){
      console.log("Player1 winner");
      ++player1Score;
      animateWinner1(a,b,c);
      player1ScoreUpdate.textContent = player1Score;
      setTimeout(()=>{clearBox(a,b,c);},100);
      ++roundCounter;
      round.textContent = roundCounter;
      setTimeout(()=>{if (playerScoreChecker()) return;},100)
      return;
    } else if (
      a.textContent === "X" &&
      b.textContent === "X" &&
      c.textContent === "X"
    ) {
      ++player2Score;
      animateWinner1(a,b,c);
      player2ScoreUpdate.textContent = player2Score;
      setTimeout(()=>{clearBox(a,b,c);},100);
      ++roundCounter;
      round.textContent = roundCounter;
      setTimeout(()=>{if (playerScoreChecker()) return;},100)
      return;
    }else if (
      a.textContent === "" ||
      b.textContent === "" ||
      c.textContent === ""
    ) {
      // At least one cell is still empty, not a draw
      isDraw = false;
    }
  }
  
  if (isDraw) {
      ++roundCounter;
      setTimeout(()=>{drawAnnouncment()},400);
      setTimeout(() => {
        clearBox();
      }, 500);
      setTimeout(() => {
        drawBox.style.display = "none";
      }, 1200);
      round.textContent = roundCounter;
      if (playerScoreChecker()) return;
    }
};

function game() {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function() {
      if (box[i].textContent === "") {
        box[i].textContent = count % 2 === 0 ? "X" : "O";
        count++;
        winner();
      }
    });
  }
};

game();

