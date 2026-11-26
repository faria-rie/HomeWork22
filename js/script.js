let nameInput = document.getElementById("nameInput")
let startGameBtn = document.getElementById("startGameBtn")
let errorMsg = document.getElementById("errorMsg")
let startScreen = document.getElementById("startScreen")
let playerOneScreen = document.getElementById("playerOneScreen");
let playerOneTitle = document.getElementById("playerOneTitle");

// 3rd Box elements (Player 2 Name)
let playerTwoScreen = document.getElementById("playerTwoScreen");
let playerTwoNameInput = document.getElementById("playerTwoNameInput");
let playerTwoStartBtn = document.getElementById("playerTwoStartBtn");
let errorPlayerTwoName = document.getElementById("errorPlayerTwoName");
// --------------------------------
startGameBtn.addEventListener("click", () => {
    if (nameInput.value == "") {
        errorMsg.removeAttribute("hidden");
    } else {
        startScreen.style.display = "hidden";
        playerOneScreen.style.display = "block";
        playerOneTitle.innerText = nameInput.value;
    }
});


// 3rd Box Event (Player 2 Name submit)
playerTwoStartBtn.addEventListener("click", () => {
    if (playerTwoNameInput.value == "") {
        errorPlayerTwoName.removeAttribute("hidden");
    } else {
        playerTwoStartBtn.style.display = "none";
        errorPlayerTwoName.removeAttribute("hidden", "");
        playerTwoScreen.setAttribute("hidden", "");
    }
});




