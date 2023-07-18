const options = document.querySelectorAll(".options");
const instructions = document.getElementById("instructions");
const middleSection = document.getElementById("middle");
const bottomSection = document.getElementById("bottom");
const resultSection = document.getElementById("result");
const nextRound = document.getElementById("nextRound");
const playAgain = document.getElementById("playAgain");
let userSelection;
let cpuSelection;
let totalAttempts = 10;
let USERScore = 0;
let CPUScore = 0;

const allOptions = {
  rock: "./img/rock.png",
  paper: "./img/paper.png",
  scissors: "./img/scissors.png",
};
options.forEach((option) => {
  option.addEventListener("click", (selected) => {
    userSelection = selected.target.id;
    if (totalAttempts > 0) {
      userSelected();
    } else {
      resultSection.style.display = "flex";
      instructions.style.display = "none";
      middleSection.style.display = "none";
      bottomSection.style.display = "none";
      FinalResult();
    }
  });
});
const userSelected = () => {
  instructions.style.display = "none";
  middleSection.style.display = "none";
  bottomSection.style.display = "flex";
  document.getElementById("userPicked").src = allOptions[userSelection];
  cpuSelected();
  eachResult(userSelection, cpuSelection);
};
const cpuSelected = () => {
  let cpuOptions = ["rock", "paper", "scissors"];
  cpuSelection = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
  document.getElementById("cpuPicked").src = allOptions[cpuSelection];
};
const eachResult = (userSelection, cpuSelection) => {
  if (userSelection === "paper" && cpuSelection === "scissors") {
    Verdict("You Loose This Round!");
    remainingAttempts(totalAttempts - 1);
    cpuScore(CPUScore + 1);
  } else if (userSelection === "paper" && cpuSelection === "rock") {
    Verdict("You Win This Round!");
    remainingAttempts(totalAttempts - 1);
    userScore(USERScore + 1);
  } else if (userSelection === "paper" && cpuSelection === "paper") {
    Verdict("Match Is Tie!");
    remainingAttempts(totalAttempts - 1);
  } else if (userSelection === "rock" && cpuSelection === "rock") {
    Verdict("Match Is Tie!");
    remainingAttempts(totalAttempts - 1);
  } else if (userSelection === "rock" && cpuSelection === "paper") {
    Verdict("You Loose This Round");
    remainingAttempts(totalAttempts - 1);
    cpuScore(CPUScore + 1);
  } else if (userSelection === "rock" && cpuSelection === "scissors") {
    Verdict("You Win This Round");
    remainingAttempts(totalAttempts - 1);
    userScore(USERScore + 1);
  } else if (userSelection === "scissors" && cpuSelection === "scissors") {
    Verdict("Match Is Tie!");
    remainingAttempts(totalAttempts - 1);
  } else if (userSelection === "scissors" && cpuSelection === "paper") {
    Verdict("You Win This Round");
    remainingAttempts(totalAttempts - 1);
    userScore(USERScore + 1);
  } else if (userSelection === "scissors" && cpuSelection === "rock") {
    Verdict("You Loose This Round");
    remainingAttempts(totalAttempts - 1);
    cpuScore(CPUScore + 1);
  }
};
const Verdict = (verdict) => {
  document.querySelector(".eachResult p").innerText = verdict;
};
nextRound.addEventListener("click", () => {
  instructions.style.display = "flex";
  middleSection.style.display = "flex";
  bottomSection.style.display = "none";
});
const remainingAttempts = (RemainingAttempts) => {
  totalAttempts = RemainingAttempts;
  document.querySelector(".circle h1").innerText = RemainingAttempts;
};

const userScore = (Us) => {
  USERScore = Us;
  document.querySelector(".userScore h1").innerText = Us;
};
const cpuScore = (CPUs) => {
  CPUScore = CPUs;
  document.querySelector(".cpuScore h1").innerText = CPUs;
};

const FinalResult = () => {
  if (USERScore === CPUScore) {
    document.querySelector(".finalResult p").innerText = "ahhh! Match Is Drawn";
  } else if (USERScore > CPUScore) {
    document.querySelector(".finalResult p").innerText =
      "Yeahhh! You Win The Game!";
  } else {
    document.querySelector(".finalResult p").innerText =
      "Ohhh! You Loose The Game";
  }
};
