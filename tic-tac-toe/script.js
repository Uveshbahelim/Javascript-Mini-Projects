let boxes = document.querySelectorAll("#box");
let rst_btn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; // Player O goes first
let gameOver = false;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver || box.innerText !== "") return;

    box.innerText = turnO ? "O" : "X";
    turnO = !turnO;
    box.disabled = true;

    checkWinner();
    checkDraw();
  });
});

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  msgContainer.style.display = "block";
  gameOver = true;
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let [a, b, c] = pattern;
    let val1 = boxes[a].innerText;
    let val2 = boxes[b].innerText;
    let val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      showWinner(val1);
      return;
    }
  }
};

const checkDraw = () => {
  if (![...boxes].some(box => box.innerText === "") && !gameOver) {
    msg.innerText = `😐 It's a Draw!`;
    msgContainer.style.display = "block";
    gameOver = true;
  }
};

const disableBoxes = () => {
  boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
  });
};

rst_btn.addEventListener("click", () => {
  turnO = true;
  gameOver = false;
  enableBoxes();
  msgContainer.style.display = "none";
});
