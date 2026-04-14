const countdown = () => {
  const currentDate = new Date();

  // Get next year
  const nextYear = currentDate.getFullYear() + 1;

  // Set target to Jan 1 of next year
  const newYearsDate = new Date(`January 1, ${nextYear} 00:00:00`);

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const secs = Math.floor(totalSeconds) % 60;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
};

countdown();
setInterval(countdown, 1000);
