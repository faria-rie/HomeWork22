const nameInput = document.getElementById("nameInput");
const startGameBtn = document.getElementById("startGameBtn");
const errorMsg = document.getElementById("errorMsg");

const numberInput = document.getElementById("numberInput");
const letsPlayBtn = document.getElementById("letsPlayBtn");
const numberErrorMsg = document.getElementById("numberErrorMsg");

const playerTwoNameInput = document.getElementById("playerTwoNameInput");
const playerTwoStartBtn = document.getElementById("playerTwostartbtn");
const errorPlayerTwoName = document.getElementById("errorPlayerTwoName");

const playerOneTitle = document.getElementById("playerOneTitle");

const screens = document.querySelectorAll(".game-box");

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

showScreen("startScreen");

startGameBtn.addEventListener("click", () => {
  if (nameInput.value.trim() === "") {
    errorMsg.hidden = false;
  } else {
    errorMsg.hidden = true;
    playerOneTitle.innerText = nameInput.value.trim();
    showScreen("playerOneScreen");
  }
});

letsPlayBtn.addEventListener("click", () => {
  if (numberInput.value.trim() === "") {
    numberErrorMsg.hidden = false;
  } else {
    numberErrorMsg.hidden = true;
    showScreen("playerTwoScreen");
  }
});

playerTwoStartBtn.addEventListener("click", () => {
  if (playerTwoNameInput.value.trim() === "") {
    errorPlayerTwoName.hidden = false;
  } else {
    errorPlayerTwoName.hidden = true;
  }
});
