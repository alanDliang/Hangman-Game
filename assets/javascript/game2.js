var moviesList = ['titanic', 'fight club', 'saving private ryan', 'forrest gump', 'office space', 'the shawshank redemption', 'american beauty', 'mulan', 'armageddon', 'schindlers list', 'pulp fiction', 'goodfellas']
var randomWord = moviesList[Math.floor(Math.random() * moviesList.length)];

var letters = "";
var wrongCounter = 10;
var winCounter = 0;
var loseCounter = 0;

function empty(str) {
    var underScoreMovie = "";
    for (var i =0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            underScoreMovie += "_"
        }
        else {underScoreMovie += "\u00A0"
        }
    }
    return underScoreMovie
}

var underScoreMovie = empty(randomWord);

window.onload = function () {
    var guessBoxDiv = document.getElementById("guess-box");
    guessBoxDiv.innerHTML = empty(randomWord);

    var guessNumberDiv = document.getElementById("guess-number");
    guessNumberDiv.innerHTML = wrongCounter;

    var winCounterDiv=document.getElementById("win-number");
    winCounter.innerHTML = winCounter;

    var loseCounterDiv = document.getElementById("loss-number");
    loseCounterDiv.innerHTML = loseCounter;

};

document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.keyCode === 116 && event.key != "t") {
        return;
    }
    if (event.keyCode <57 || event.keycode > 90) {
        return;
    }
}

var guessed = "";
for (var i =0; i <randomWord.length; i++) {
    if (letter === randomWord[i].toLowerCase()){
        guessed +=randomWord[i]
    }
    else {
        guessed+=underScoreMovie[i];
    }
}

if (letter.indexOf(letter) === -1 && guessed.toLowerCase().indexOf(letter === -1)) {
    letters += letter + "\u00A0";
    badGuessCounter--;

    var guessNumberDiv = document.getElementById("guess-number");
    guessNumberDiv.innerHTML=badGuessCounter;

}

var alreadyGuessedDiv = document.getElementById("multi-use-box");
alreadyGuessedDiv.innerHTML= "Already USED: " + letters.toUpperCase();

underScoreMovie=guessed;

var guessBoxDiv=document.getElementById("guess-box");
guessBoxDiv.innerHTML=guessed;

function startOver() {
    var randomWord = moviesList[Math.floor(Math.random() * moviesList.length)];
    underScoreMovie=empty(randomWord);
    letters="";
    badGuessCounter=10;
    var guessBoxDiv = document.getElementById("guess-box");
    guessBoxDiv.innerHTML = empty(randomWord);

    var guessNumberDiv = document.getElementById("guess-number");
    guessNumberDiv.innerHTML = wrongCounter;

    var alreadyGuessedDiv = document.getElementById("multi-use-box");
    alreadyGuessedDiv.innerHTML= "Already USED: " + letters.toUpperCase();

}

if (guessed.replace("\u00A0", " ")=== randomWord){
    winCounter++;
    var winCounterDiv=document.getElementById("win-number");
    winCounter.innerHTML = winCounter;
}