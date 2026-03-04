
const userscoreText = document.getElementById("yscore");
const computerscoreText = document.getElementById("cscore");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset");


let userscore = 0;
let computerscore = 0;



function cChoice() {
    const x = Math.random();

    if (x < 0.33) {
        return "rock";
    } else if (x < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}



function playgame(userchoice) {

    const computerchoice = cChoice();

    if (userchoice === computerchoice) {
        result.textContent = "It's a Draw! 🤝";
    } 
    else if (
        (userchoice === "rock" && computerchoice === "scissors") ||
        (userchoice === "paper" && computerchoice === "rock") ||
        (userchoice === "scissors" && computerchoice === "paper")
    ) {
        userscore++;
        result.textContent = `You Win! 🎉 Bot chose ${computerchoice}`;
    } 
    else {
        computerscore++;
        result.textContent = `You Lose! 😢 Bot chose ${computerchoice}`;
    }


    userscoreText.textContent = userscore;
    computerscoreText.textContent = computerscore;
}



const buttons = document.querySelectorAll(".moves button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playgame(button.id);
    });
});



resetBtn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;

    userscoreText.textContent = 0;
    computerscoreText.textContent = 0;

    result.textContent = "Game reset. Start again 🥳";
});