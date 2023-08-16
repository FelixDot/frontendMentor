document.addEventListener("DOMContentLoaded", function () {
  let countDownDate = new Date("july 16, 2022");
  const topDay = document.getElementById("top-day");
  const botDay = document.getElementById("bot-day");

  const topHour = document.getElementById("top-hour");
  const botHminute = document.getElementById("bot-hour");

  const topMinute = document.getElementById("top-minute");
  const botMinute = document.getElementById("bot-minute");

  const topSec = document.getElementById("top-sec");
  const botSec = document.getElementById("bot-sec");

  function updateCountDownDate() {
    let today = new Date();

    while (countDownDate < today) {
      countDownDate.setFullYear(countDownDate.getFullYear() + 1);
      console.log(countDownDate.getTime());
    }
  }
  updateCountDownDate();

  let x = setInterval(function () {
    let now = new Date().getTime();
    let t = countDownDate.getTime() - now;

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let days = Math.floor(t / day);
    let hours = Math.floor((t % day) / hour);
    let minutes = Math.floor((t % hour) / minute);
    let seconds = Math.floor((t % minute) / 1000);

    topDay.innerText = days;
    botDay.innerText = days;
    topHour.innerText = hours;
    botHminute.innerText = hours;
    topMinute.innerText = minutes;
    botMinute.innerText = minutes;
    topSec.innerText = seconds;
    botSec.innerText = seconds;
  }, 1000);
});
