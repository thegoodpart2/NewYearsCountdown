const newYears = "1 Jan 2025";

const countdown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = Math.floor(totalSeconds) % 60;
  
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
}

countdown();

setInterval(countdown, 1000);

function darkMode() {
  let element = document.body;
  element.className = "dark-mode";
}
function lightMode() {
  let element = document.body;
  element.className = "light-mode";
}
