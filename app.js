const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
const winnerScreen = document.getElementById("winnerScreen");
const winnerText = document.getElementById("winnerText");
const okBtn = document.getElementById("okBtn");

let turno = true; // true = O, false = X

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;

    box.innerText = turno ? "O" : "X";
    turno = !turno;

    box.style.pointerEvents = "none";
    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winpatterns) {
    const [a, b, c] = pattern;
    const val1 = boxes[a].innerText;
    const val2 = boxes[b].innerText;
    const val3 = boxes[c].innerText;

    if (val1 && val1 === val2 && val2 === val3) {
      showWinner(val1);
      break;
    }
  }
}

function showWinner(winner) {
  winnerText.innerText = `Winner is ${winner}`;
  winnerScreen.classList.add("active");
  boxes.forEach((box) => (box.style.pointerEvents = "none"));
}

reset.addEventListener("click", resetGame);
okBtn.addEventListener("click", () => {
  winnerScreen.classList.remove("active");
  resetGame();
});

function resetGame() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
  });
  turno = true;
}
 