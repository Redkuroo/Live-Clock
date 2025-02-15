//debugger
console.log("Day.js loaded:", typeof dayjs !== "undefined");


function updateTime() {
  const now = dayjs();//js library

  document.querySelector("#current-day h1").textContent = now.format("dddd");   // Update day

  document.querySelector("#current-time h1").textContent =// Update time
    now.format("HH:mm:ss:A");


  document.querySelector("#current-date h1").textContent =   // Update date
    now.format("MMM DD, YYYY");
}

updateTime();//calls function

setInterval(updateTime, 1000);//realtime update

MicroModal.init();//modal library

dayjs.extend(dayjs_plugin_utc); //dayjs plugin
dayjs.extend(dayjs_plugin_timezone);



function changeTimezone() {

  let selectedTimeZone = document.getElementById("time-zone").value;
  const now = dayjs.utc();
  const convertedTime = now.tz(selectedTimeZone).format("HH:mm:ss:A");
  const convertedDay = now.tz(selectedTimeZone).format("dddd")
  const convertedDate = now.tz(selectedTimeZone).format("MMM DD, YYYY")

  document.querySelector("#current-time h1").textContent = convertedTime;//converts time
  document.querySelector("#current-day h1").textContent = convertedDay;//converts day
  document.querySelector("#current-date h1").textContent = convertedDate;//converts day
  setInterval(changeTimezone, 1000);
  document.querySelector("#user-timezone h1").textContent = selectedTimeZone; //updates selected timezone
}

document.getElementById("change").addEventListener("click", function (event) {

  event.preventDefault()
  changeTimezone();

});


