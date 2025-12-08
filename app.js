const timer = document.querySelector('.new-year-timer');

function setTimer () {
  setInterval(() => {
    const date = new Date();
    const newYear = new Date(date.getFullYear() + 1, 0, 1);
    const months = Math.floor((newYear - date) / 1000 / 60 / 60 / 24 / 30);
    const days = Math.floor((newYear - date) / 1000 / 60 / 60 / 24) - months * 30;
    const hours = Math.floor((newYear - date) / 1000 / 60 / 60) % 24;
    const minutes = Math.floor((newYear - date) / 1000 / 60) % 60;
    const seconds = Math.floor((newYear - date) / 1000) % 60;
    
    const time = `${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    timer.innerHTML = time;
  }, 1000);
}

setTimer();