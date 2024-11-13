const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');


function showTime(){

  const date = new Date(); 
  
  let getHour = date.getHours();
  getHour = getHour > 12 ? `${getHour-12 }`: getHour;
  getHour = getHour < 10 ? `0${getHour}` : getHour;
  
  let getMinute = date.getMinutes();
  getMinute = getMinute < 10 ? `0${getMinute}` : getMinute;
  
  let getSecond = date.getSeconds();
  getSecond = getSecond < 10 ? `0${getSecond}` : getSecond;
  
  //console.log(getHour,getMinute,getSecond);
  
  hour.innerHTML = getHour;
  minute.innerHTML = getMinute;
  second.innerHTML = getSecond;
}

setInterval(showTime,1000);

