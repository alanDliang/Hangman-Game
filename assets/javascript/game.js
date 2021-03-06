// Create array of movie stars

var movies = [
	'titanic', 'fight club', 'saving private ryan', 'forrest gump', 'office space', 'the shawshank redemption', 'american beauty', 'mulan', 'armageddon', 'schindlers list', 'pulp fiction', 'goodfellas'
]

// Randomly choose one movie star
// Sets up guessed letters box and other scores

var randStar = movies[Math.floor(Math.random() * movies.length)];
var letters = "";
var badGuessCounter = 10;
var winCounter = 0;
var loseCounter = 0;


// Display the empty characters for the user  

function emptyHangman(str) {

	var underscoreStar = "";

	for (var i = 0; i < str.length; i++) {
		if (str[i].match(/[a-z]/i)) {
			underscoreStar += "_"
		} else {
			underscoreStar += "\u00A0"
		}
	} 
	return underscoreStar
}

var underscoreStar = emptyHangman(randStar);

// All scores and info needed on page load goes here

window.onload = function() {

	var guessboxDiv = document.getElementById("guess-box");
	guessboxDiv.innerHTML = emptyHangman(randStar);

	var guessNumberDiv = document.getElementById("guess-number");
	guessNumberDiv.innerHTML = badGuessCounter;

	var winCounterDiv = document.getElementById("win-number");
	winCounterDiv.innerHTML = winCounter;

	var loseCounterDiv = document.getElementById("loss-number");
	loseCounterDiv.innerHTML = loseCounter;

};

// Recognize that the user is hitting a key, ignore F5

document.onkeyup = function(event) {

	var letter = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(event);


	if (event.keyCode === 116 && event.key != "t") {

		return;
	}

	if (event.keyCode < 57 || event.keyCode > 90) {

		return;
	}


// Recognize whether this is a winning or losing guess

var guessedStar = "";


for (var i = 0; i < randStar.length; i++) {
	
	if (letter === randStar[i].toLowerCase()) {

		guessedStar += randStar[i];


	} else {

		guessedStar += underscoreStar[i];

	}

}

// Adds losing guesses to guessed letters variable without duplication, count bad guesses

if (letters.indexOf(letter) === -1 && guessedStar.toLowerCase().indexOf(letter) === -1) {

	letters += letter + "\u00A0";

	badGuessCounter--;

	var guessNumberDiv = document.getElementById("guess-number");
	guessNumberDiv.innerHTML = badGuessCounter;

}

// Update list of already guessed letters

var alreadyGuessedDiv = document.getElementById("multi-use-box");
alreadyGuessedDiv.innerHTML = "ALREADY GUESSED: " + letters.toUpperCase();


// Add winning guess to name

underscoreStar = guessedStar;

var guessboxDiv = document.getElementById("guess-box");
guessboxDiv.innerHTML = guessedStar;


// If they win or lose, add one to appropriate score
// Reset the game once the game ends

function startOver() {

	randStar = movies[Math.floor(Math.random() * movies.length)];

	underscoreStar = emptyHangman(randStar);

	letters = "";

	badGuessCounter = 10;

	var guessboxDiv = document.getElementById("guess-box");
	guessboxDiv.innerHTML = emptyHangman(randStar);

	var guessNumberDiv = document.getElementById("guess-number");
	guessNumberDiv.innerHTML = badGuessCounter

	var alreadyGuessedDiv = document.getElementById("multi-use-box");
	alreadyGuessedDiv.innerHTML = "ALREADY GUESSED: " + letters.toUpperCase();

}

if (guessedStar.replace("\u00A0", " ") === randStar) {

	winCounter++;

	var winCounterDiv = document.getElementById("win-number");
	winCounterDiv.innerHTML = winCounter;

	// Display photo of the movie star at the end of the game

	var starPhotoDiv = document.getElementById("star-photo");
	starPhotoDiv.src = "assets/images/" + randStar + ".jpg";

	startOver();

}

if (badGuessCounter === 0) {

	loseCounter++;

	var loseCounterDiv = document.getElementById("loss-number");
	loseCounterDiv.innerHTML = loseCounter;

	startOver();

}

};



