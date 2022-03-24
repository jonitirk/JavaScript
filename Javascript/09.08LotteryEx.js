/*
After the successful cottage retreat people decided to make a draw (raffle/lottery, arpajaiset) for deciding who gets the remaining food. 
Make a program that asks for the name of all the attendants and randomize the winner.
*/

var names = [];
var index = 0;

function addName() {

	var name = document.getElementById("name").value;
	document.getElementById("name").value = "";

	names.push(name);
	

	var namesText = "Inserted names: ";


	for (var i = 0; i < names.length; i++) {
		namesText += names[i] + " ";
	}

	document.getElementById("nameList").innerHTML = namesText;
}


function makeDraw() {

	var winningIndex = Math.floor(Math.random() * names.length);

	document.getElementById("answer").innerHTML = "<br>Winner is " + names[winningIndex];


}
