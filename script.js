let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winnerTag = document.querySelector("#winPlayer");
let turnO = false;
let turnX = true;
let winnerFound = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      turnX = true;
    } else {
      box.innerText = "X";
      turnO = true;
      turnX = false;
    }
    box.disabled = true;
    checkWinner();
  });
});

resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    turnO = false;
    turnX = true;
  });
});

const resetGame = () => {
  setTimeout(function () {
    winnerTag.innerHTML = "Winner: None";
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
      turnO = false;
      turnX = true;
    });
  }, 2000);
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let box1Val = boxes[pattern[0]].innerText;
    let box2Val = boxes[pattern[1]].innerText;
    let box3Val = boxes[pattern[2]].innerText;
    if (box1Val != "" && box2Val != "" && box3Val != "") {
      if (box1Val === box2Val && box2Val === box3Val) {
        winnerFound = true;
        resetGame();
        if (box1Val === "X") {
          winnerTag.innerText =
            "Winner: Player 1 (X) Please wait for 2s for new Game!";
        } else {
          winnerTag.innerText =
            "Winner: Player 2 (O) Please wait for 2s for new Game!";
        }
      }
    }
  }
  if (!winnerFound && Array.from(boxes).every((box) => box.innerText !== "")) {
    winnerTag.innerText =
      "No Winner Please Try Again! and wait for 2s for new Game!  ";
    resetGame();
  }
};
