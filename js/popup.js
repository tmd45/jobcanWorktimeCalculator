// DEBUG
console.log("popup.js");

function showPopupPage(jw) {
	document.getElementById('stdWorkDays').nextElementSibling.innerText = jw.stdWorkDays;
	document.getElementById('stdWorkHours').nextElementSibling.innerText = jw.stdWorkHours;
	document.getElementById('workedDays').nextElementSibling.innerText = jw.workedDays;
	document.getElementById('workedHours').nextElementSibling.innerText = jw.workedHours.toFixed(2);
	document.getElementById('salariedDays').nextElementSibling.innerText = jw.salariedDays;
	document.getElementById('remainWorkDays').nextElementSibling.innerText = jw.remainWorkDays;
	document.getElementById('excessWorkTimes').nextElementSibling.innerText = jw.excessWorkTimes.toFixed(2);
	document.getElementById('workTimeMargin').nextElementSibling.innerText = jw.workTimeMargin.toFixed(2);
	document.getElementById('requiredWorkTimes').nextElementSibling.innerText = jw.requiredWorkTimes.toFixed(2);
	var lastUpdatedAt = new Date(jw.lastUpdatedAt);
	document.getElementById('lastUpdatedAt').nextElementSibling.innerText = lastUpdatedAt.toString();
}

chrome.storage.sync.get(
	null,
	function(jobcanWorktimes) {
		showPopupPage(jobcanWorktimes);
	}
);