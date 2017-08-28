//1. make array of words for game.
//2. select random word from array.
//3. # of letters from random movie = "_".
//4. empty string = random movie.
//5. join

var moviesList = ['titanic', 'fight club', 'saving private ryan', 'forrest gump', 'office space', 'the shawshank redemption', 'american beauty', 'mulan', 'armageddon', 'schindlers list', 'pulp fiction', 'goodfellas']
var randomWord = moviesList[Math.floor(Math.random() * moviesList.length)];

var s;
var count = 0;
var answerArray = [];

function startUp() {
	for (var i = 0; i < randomWord.length; i++) {
	answerArray[i] = "_";
}

s = answerArray.join(" ");
document.getElementById("answer").innerHTML = s;
}

function Letter() {
	var letter = document.getElementById("letter").value;
	if (letter.length > 0) {
		for (var i = 0; i < randomWord.length; i++)
	
			if (randomWord[i] === letter) {
				answerArray[i] = letter;

			}		
}	

function ClearFields() {

     document.getElementById("letter").value = "";
     
}


count++;
document.getElementById("counter").innerHTML = "Number of Tries: " + count;
document.getElementById("answer").innerHTML = answerArray.join(" ");
}
if (count>5) {
	alert("YOU LOSE!");
	
	}




