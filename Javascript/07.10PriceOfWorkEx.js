/*
A construction firm is doing small repairs. Make a program for inputting the repair work details and calculating its price. 
The price for an hour of work is 48 euros during the workdays and 72 euros on Sundays. 
Define there the following functions: allCapsTitleTrimmed(text) and isSunday(dateText) . 
The functions will be called in function modifyTitle() and calculate().

*/

function modifyTitle() {
	var text = document.getElementById("title").value;
	var newText = allCapsTitleTrimmed(text);

	document.getElementById("title").value = newText;

}

function allCapsTitleTrimmed(text) {
	var text = document.getElementById("title").value;
	var title = text.trim();

	var allcaps = title.toUpperCase();

	return allcaps;

}

function calculate() {

	var dateText = document.getElementById("date").value;

	var start = document.getElementById("startTime").value;
	var end = document.getElementById("endTime").value;

	var startHours = start.substr(0, 2);
	var startMins = start.substr(-2);
	var endHours = end.substr(0, 2);
	var endMins = end.substr(-2);

	var hoursInMins = endHours * 60 - startHours * 60;

	var calculatedMins = endMins - startMins;

	var totalMins = hoursInMins + calculatedMins;

	var workdayCost = (48 / 60) * totalMins;

	var sundayCost = (72 / 60) * totalMins;


	if (isSunday(dateText) == false) {
		document.getElementById("answer").innerHTML = "Length of the work was " + totalMins + " minutes.<br>The hourly price is during the workdays 48.00 euros.<br>The price of this repair work is " + workdayCost.toFixed(2) + " euros.";
	} else {
		document.getElementById("answer").innerHTML = "Length of the work was " + totalMins + " minutes.<br>The hourly price is during the Sundays 72.00 euros.<br>The price of this repair work is " + sundayCost.toFixed(2) + " euros."
	}
}

function isSunday(dateText) {

	var dateText = document.getElementById("date").value;

	var day = dateText.substr(0, 2);
	var month = dateText.substr(3, 5) - 1;
	var year = dateText.substr(6, 10);

	var asDate = new Date();
	asDate.setDate(day);
	asDate.setMonth(month);
	asDate.setFullYear(year);

	if (asDate.getDay() == 0) {
		return true;
	} else {
		return false;
	}

}


