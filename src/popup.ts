// DEBUG
console.log("popup.js");

function showPopupPage(jw: any) {
  const d: Document = window.document;

  const [
    stdWorkDays,
    stdWorkHours,
    workedDays,
    workedHours,
    salariedDays,
    remainWorkDays,
    excessWorkTimes,
    workTimeMargin,
    requiredWorkTimes,
    lastUpdatedAtElm
  ] = [
    <HTMLDListElement>d.getElementById("stdWorkDays")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("stdWorkHours")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("workedDays")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("workedHours")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("salariedDays")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("remainWorkDays")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("excessWorkTimes")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("workTimeMargin")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("requiredWorkTimes")!.nextElementSibling,
    <HTMLDListElement>d.getElementById("lastUpdatedAt")!.nextElementSibling
  ];

  stdWorkDays.innerText = jw.stdWorkDays;
  stdWorkHours.innerText = jw.stdWorkHours;
  workedDays.innerText = jw.workedDays;
  workedHours.innerText = jw.workedHours.toFixed(2);
  salariedDays.innerText = jw.salariedDays;
  remainWorkDays.innerText = jw.remainWorkDays;
  excessWorkTimes.innerText = jw.excessWorkTimes.toFixed(2);
  workTimeMargin.innerText = jw.workTimeMargin.toFixed(2);
  requiredWorkTimes.innerText = jw.requiredWorkTimes.toFixed(2);
  let lastUpdatedAt = new Date(jw.lastUpdatedAt);
  lastUpdatedAtElm.innerText = lastUpdatedAt.toString();
}

chrome.storage.sync.get(null, jobcanWorktimes => {
  showPopupPage(jobcanWorktimes);
});
