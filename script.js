var guessCount = 0;
var maxGuesses = 10;

var words = [

	"westworld",
	"survivor",
	"shameless",
	"quantico",
	"stranger_things",
	"black_mirror"
];

var word= "";

var answers = [];

function startup () {

	var clickGuess = document.getElementById("listener");

	clickGuess.addEventListener('click', startup);

	word = words[Math.floor(Math.random() * words.length)];

	answers = [];
		for (var i = 0; word.length; i++) {
			answers[i] = "_";
		}
	document.getElementById("answer").innerHTML= answers.join(" ");

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
					showMessage = guess + "is in the answer!"
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

			document.getElementById("answer").innerHTML=answers.join(" ");

			document.getElementById("numGuess").value = "";
	}

		document.getElementById()
};












