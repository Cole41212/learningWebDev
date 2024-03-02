//Number guessing game

const minNum = 1;
const maxNum = 10;
let userGuess;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
const submitBtn = document.getElementById("submitBtn");
const attemptCount = document.getElementById("attemptCount");
const guessResult = document.getElementById("guessResult");
console.log(answer);

let attempts = 0;
let running = true;


submitBtn.onclick = () => {
    userGuess = document.getElementById("userGuess").value;
    if (userGuess == answer){
        guessResult.textContent = `The number was ${answer}. You guessed correctly. Congrats!`;
        guessResult.className = "win";
        running = false;
    }
    else{
        guessResult.textContent = answer < userGuess ? "Too high, try again" : "Too low, try again";
        guessResult.className = "lose ";
    }
    attemptCount.textContent = Number(attemptCount.textContent) + 1;
}

/*
// ternary operator = if else shortcut statement. helps
// easily assign a variable based on a condition

let age = 17;
let message = age >= 18 ? "You're an adult" : "You're a minor";
// a lot more condensed than the if else statement

//window.alert(message);

let time = 16;
let greeting = time < 12 ? "Goodmorning!" : "Good afternoon!";

let number = 100;
let otherNum = number >= 100 ? 10 : 0;
//otherNum will equal 10
*/