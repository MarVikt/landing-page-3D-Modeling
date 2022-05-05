const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimes = () => {
    const currentTime = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const remainingTime = (dateDeadline - currentTime) / 1000;

    const hours = Math.floor(remainingTime / 60 / 60);
    const minutes = Math.floor((remainingTime / 60) % 60);
    const seconds = Math.floor(remainingTime % 60);
    return { remainingTime, hours, minutes, seconds };
  };

  const updateClock = (timeLeft) => {
    if (timeLeft > 0) {
      timerHours.textContent = resultTimes.hours < 10 ? '0' + resultTimes.hours : resultTimes.hours;
      timerMinutes.textContent = resultTimes.minutes < 10 ? '0' + resultTimes.minutes : resultTimes.minutes;
      timerSeconds.textContent = resultTimes.seconds < 10 ? '0' + resultTimes.seconds : resultTimes.seconds;
    } else {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };

  let resultTimes = getTimes();
  updateClock(resultTimes.remainingTime);

  let idInterval = setInterval(() => {
    updateClock(resultTimes.remainingTime);
    resultTimes = getTimes();
    if (resultTimes.remainingTime < 0) {
      clearInterval(idInterval);
    }
    },500);

};
export default timer;