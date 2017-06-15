// DEBUG
console.log("popup.js");

/**
 * @param {Date} d 
 */
const formatDate = d => `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}時${d.getMinutes()}分`;

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
  document.getElementById('lastUpdatedAt').nextElementSibling.innerText = formatDate(new Date(jw.lastUpdatedAt));
}

chrome.storage.sync.get(null, showPopupPage);