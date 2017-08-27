//1. make array of words for game.
//2. select random word from array.
//3. users guessed letters will be displayed on screen
//4. match guess letters to random seleted word.
//5. 

var moviesList = ['titanic', 'fight club', 'saving private ryan', 'forrest gump', 'office space', 'the shawshank redemption', 'american beauty', 'mulan', 'armageddon', 'schindlers list', 'pulp fiction', 'goodfellas']
var randomPick = moviesList[Math.floor(Math.random() * moviesList.length)];

//function randomWord (targetWord) {
//	targetWord = moviesList[Math.random()*moviesList.length];
//}ovie