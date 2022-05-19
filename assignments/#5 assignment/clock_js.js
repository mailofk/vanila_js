const h2 = document.querySelector("h2#clock");

function d_day() {
  const clock = new Date();

  let christmas = new Date('2022, 12, 25');
  const time = Math.floor(christmas.getTime() - clock.getTime())/1000;



  const days = Math.floor(time/60/60/24);
  const hours = Math.floor((time-days*86400)/60/60);
  const minutes = Math.floor((time-days*86400-hours*3600)/60);
  const seconds = Math.floor(time-days*86400-hours*3600 - minutes*60);

  h2.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

d_day();
setInterval(d_day,1000);