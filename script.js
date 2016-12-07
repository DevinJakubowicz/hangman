var guessCount = 0;
var guessedRight = 0;
var guessedWrong = 0;
var maxGuesses = 10;

var words = [

	"westworld",
	"survivor",
	"shameless",
	"quantico",
	"stranger_things",
	"black_mirror"
];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var word = "";

var answers = [];

function startup () {

	var clickStart = document.getElementById("listener");

	clickStart.addEventListener('click', startup);

	word = words[Math.floor(Math.random() * words.length)];

	answers = [];
		for (var i = 0; word.length; i++) {
			answers[i] = "_";
		}
	document.getElementById("answer").innerText= answers.join(" ");

};


function firstGuess () {

	var guess = document.getElementById("numGuess").value;
	var showMessage = "";

	if (guess.length !== 1) {
		showMessage ="Enter a single letter"
	}
		else {
			var i = 0;
			for (i = 0; i < words.length; i++) {
				if (words[i] === guess) {
					answers = guess;
					showMessage = guess + " is in the answer!"
				}
			}
			var lettersLeft = answers.length;

			for (i = 0; i < answers.length; i++) {
				if (answers[i] !== '_') {
					lettersLeft -= 1;
				}
			}

			if (lettersLeft == 0) {
				showMessage = "You have guessed the word!"
			}

			if (showMessage === "") {
				showMessage = "No " +guess;
			}

			document.getElementById("answer").innerText=answers.join(" ");

			document.getElementById("numGuess").value = "";
	}

		document.getElementById("message").innerText = showMessage;
};


	// function hangman () {

	// 	if (guessedWrong === 0) {
	// 		document.getElementByClassName("hangman-container").innerHTML = 
	// 	}

		// else if (guessedWrong === 1) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 2) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 3) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 4) {
		// 	document.getElementByClassName("hangman-container").innerHTML = 
		// }

		// else if (guessedWrong === 5) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 6) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 7) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 8) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else if (guessedWrong === 9) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

		// else (guessedWrong === 10) {
		// 	document.getElementByClassName("hangman-container").innerHTML =
		// }

	// };











