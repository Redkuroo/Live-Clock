console.log("Day.js loaded:", typeof dayjs !== "undefined");


function updateTime() {
  const now = dayjs();

  document.querySelector("#current-day h1").textContent = now.format("dddd");
  // Update time
  document.querySelector("#current-time h1").textContent =
    now.format("HH:mm:ss:A");

  // Update date
  document.querySelector("#current-date h1").textContent =
    now.format("MMM DD, YYYY");
}

updateTime();
setInterval(updateTime, 1000);

MicroModal.init();
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);



function changeTimezone() {
 
  let selectedTimeZone = document.getElementById("time-zone").value;
  const now = dayjs.utc();
  const convertedTime = now.tz(selectedTimeZone).format("HH:mm:ss:A");
 
  document.querySelector("#current-time h1").textContent = convertedTime;
  setInterval(changeTimezone, 1000);
  document.getElementById("user-timezone").textContent = selectedTimeZone;
}

document.getElementById("change").addEventListener("click", function (event) {
    
    event.preventDefault()
 changeTimezone();

});


