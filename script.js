var guesses = 0;
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

	var guesses = document.getElementById("").value;
	var showMessage = "";

	if (guesses.length !== 1) {
		showMessage ="Enter a single letter"
	}
		else {
			var i = 0;
			for (i = 0; i < words.length; i++) {
				if (words[i] === guesses) {
					answers = guesses;
					showMessage =guesses + "is in the answer!"
				}
			}

		}
}










