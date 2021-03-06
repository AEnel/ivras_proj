const timer = (id, deadline) => {
  const getTimeRemaining = (endtime) => {
    const time = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor((time/(1000 * 60 * 60)) % 24);
    const days = Math.floor((time/(1000*60*60*24)) );

    return {
      'total': time,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds':seconds,
    };
  };

  const addZero = (num) => {
    if(num <= 9){
      return '0'  + num;
    }else{
      return num;
    }
  };

  const setClock = (selector, endtime) => {

    const timer = document.querySelector(selector);
    const days = document.querySelector('#days');
    const minutes = document.querySelector('#minutes');
    const hours = document.querySelector('#hours');
    const seconds = document.querySelector('#seconds');
    const timeInterval = setInterval( updateClock, 1000);

    updateClock();

    function updateClock() {

      const time = getTimeRemaining(endtime);

      days.textContent = addZero(time.days);
      minutes.textContent = addZero(time.minutes);
      hours.textContent = addZero(time.hours);
      seconds.textContent = addZero(time.seconds);

      if(time.total <= 0){
        days.textContent = '00';
        minutes.textContent = '00';
        hours.textContent ='00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

export default timer;