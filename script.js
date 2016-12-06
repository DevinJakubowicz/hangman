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

	word = words[Math.floor(Math.random() * words.length)];

	answers = [];
		for (var i = 0; word.length; i++) {
			answers[i] = "_";
		}
	document.getElementById("answer").innerHTML= answers.join(" ");

}


function firstGuess () {

	var guess = parseInt(document.getElementById("numGuess").value);
	var showMessage = "";

	if (guess.length !== 1) {
		showMessage ="Enter a single letter"
	}
		else {
			var i = 0;
			for (i = 0; i < words.length; i++) {
				if (words[i] === guess) {
					answers = guess;
					showMessage =guess + "is in the answer!"
				}
			}

		if(guessCount >= maxGuesses){
			document.getElementById("").innerHTML = "You lost!"
		}
			document.getElementById("numGuess").value = "";
	}
}










