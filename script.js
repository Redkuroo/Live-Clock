// Ensure Day.js is loaded
console.log("Day.js loaded:", typeof dayjs !== "undefined");

// Function to update time
function updateTime() {
    const now = dayjs();
    document.querySelector("#current-day h1").textContent = now.format("ddd");
    // Update time
    document.querySelector("#current-time h1").textContent = now.format("HH:mm:ss:A");

    // Update date
    document.querySelector("#current-date h1").textContent = now.format("MM/DD/YYYY");
}


updateTime();
setInterval(updateTime, 1000);




MicroModal.init();

 