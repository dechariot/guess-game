
let randomNumber = Math.ceil(Math.random() * 100);
console.log("Random number is ", randomNumber);
let userGuess = document.getElementById("userInput");
let guessButton = document.getElementById("guessButton");
let resultArea = document.getElementById("resultArea");
let chanceArea = document.getElementById("chanceArea");
let resetButton = document.getElementById("resetButton");
let game = document.getElementById("game")

let historyArray = []
let chance = 5;
let userNumber = userGuess.value



resetButton.addEventListener("click", reset);
guessButton.addEventListener("click", guess);


var counter = 30
setInterval(function () {
    counter--;
    if (counter >= 0) {
        id = document.getElementById("count");
        id.innerHTML = `You have ${counter} left`;
        if (counter == 0) {
            resultArea.innerHTML = `You Lose!`
        }
    }
}, 1000);

function guess() {
    let message = "";
    chance = chance - 1
    // if(!userNumber){
    //    return document.getElementById("resultArea").innerHTML = `Type something`
    // }
    userHistory();
    if (chance == 0) {
        guessButton.disabled = true;
        chance = 0;
        counter = 0
    }

    // if (historyArray.includes(userNumber)) {
    //     return message = "duplicated";
    // }

    if (userNumber == randomNumber) {
        alert("You did great");
        reset();
    }
    else if (userNumber > randomNumber) {
        message = "Too high!"
    }
    else if (userNumber < randomNumber) {
        message = "Too low!"
    }
    resultArea.innerHTML = `${message}`;
    chanceArea.innerHTML = `Chance: ${chance}`;

    if (chance == 0) {
        chance = 0;
        guessButton.disabled = true;
        document.getElementById("resultArea").innerHTML = `You Lose`
        count = 0
        document.getElementById("count").innerHTML = `You have ${count} left`
    }
}

function reset() {
    window.location.reload(true)
};

function userHistory() {
    historyArray.push(userGuess.value);
    var text = "";
    var i;
    for (i = 0; i < historyArray.length; i++) {
        text += historyArray[i] + " ";
    }
    document.getElementById("history").innerHTML = text;
}


