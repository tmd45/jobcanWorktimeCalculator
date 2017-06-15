/*
 * Scraping Jobcan employee/attendance page.
 * ft. https://github.com/hanocha/how-many-work-time/blob/master/app/models/work_time_info.rb
 */

var stdWorkDays,
  stdWorkHours,
  workedDays,
  workedHours,
  salariedDays,
  remainWorkDays,
  excessWorkTimes,
  workTimeMargin,
  requiredWorkTimes,
  lastUpdatedAt;

var infotplRow = document
  .getElementsByClassName("infotpl")[0]
  .getElementsByTagName("tr"),
  rowLength = infotplRow.length;

// 所定労働日数
stdWorkDays = ~~infotplRow[4]
  .getElementsByTagName("td")[0]
  .innerText.split(" ")[0];
// 所定労働時間
stdWorkHours = stdWorkDays * 8;

// 実働日数
workedDays = ~~infotplRow[6].getElementsByTagName("td")[0].innerText;

// 実労働時間
var tmpWorked = infotplRow[13].getElementsByTagName("td")[0].innerText,
  tmpWorkedHours = ~~tmpWorked.split(":")[0],
  tmpWorkedMinutes = ~~tmpWorked.split(":")[1];
workedHours = tmpWorkedHours + tmpWorkedMinutes / 60;

// 有給休暇消化日数
var tmpSalariedDays = 0,
  tmpSalariedHarfDaysAm = 0,
  tmpSalariedHarfDaysPm = 0;
var thText;
// 後ろから３カラム分のデータ（があるかもしれない）
for (let i = 1; i < 4; i++) {
  // ht の無いカラムは無いはずだが念のため
  if (infotplRow[rowLength - i].getElementsByTagName("th")) {
    thText = infotplRow[rowLength - i].getElementsByTagName("th")[0].innerText;
  } else {
    thText = null;
  }
  // th の値によって判断する
  switch (thText) {
    case "有休(全休)":
      tmpSalariedDays = ~~infotplRow[rowLength - i].getElementsByTagName(
        "td"
      )[0].innerText;
      break;
    case "有休(AM休)":
      tmpSalariedHarfDaysAm = ~~infotplRow[rowLength - i].getElementsByTagName(
        "td"
      )[0].innerText;
      break;
    case "有休(PM休)":
      tmpSalariedHarfDaysPm = ~~infotplRow[rowLength - i].getElementsByTagName(
        "td"
      )[0].innerText;
      break;
    default:
      break;
  }
}
salariedDays = tmpSalariedDays + tmpSalariedHarfDaysAm + tmpSalariedHarfDaysPm;

// 今月の残り出勤可能日数
// 所定労働日数から、(実働日数+有給(全休))を引いたもの
remainWorkDays = stdWorkDays - (workedDays + salariedDays);

// 給与労働時間
// 実労働時間に有給休暇（1 day = 8 hours とする）分の労働時間を足したもの
excessWorkTimes = workedHours + salariedDays * 8;

// 何時間余裕があるか
// 残りの出勤可能日全て 8 時間労働すると仮定したときの猶予時間数
workTimeMargin = excessWorkTimes - (stdWorkHours - remainWorkDays * 8);

// 1日あたり何時間働けばいいか
// 所定労働時間から実質労働時間を引いた値を残りの出勤可能日数で割ったもの
requiredWorkTimes = (function() {
  var shortTime = stdWorkHours - excessWorkTimes;
  if (remainWorkDays == 0) {
    return shortTime;
  }
  return (stdWorkHours - excessWorkTimes) / remainWorkDays;
})();

lastUpdatedAt = Date.now();

// DEBUG
console.log(
  "worktime.js",
  stdWorkDays,
  stdWorkHours,
  workedDays,
  workedHours,
  salariedDays,
  remainWorkDays,
  excessWorkTimes,
  workTimeMargin,
  requiredWorkTimes,
  lastUpdatedAt
);

var jobcanWorktimes = {
  state: {
    stdWorkDays: stdWorkDays,
    stdWorkHours: stdWorkHours,
    workedDays: workedDays,
    workedHours: workedHours,
    salariedDays: salariedDays,
    remainWorkDays: remainWorkDays,
    excessWorkTimes: excessWorkTimes,
    workTimeMargin: workTimeMargin,
    requiredWorkTimes: requiredWorkTimes,
    lastUpdatedAt: lastUpdatedAt
  }
};

chrome.storage.sync.set(jobcanWorktimes, function() {});
