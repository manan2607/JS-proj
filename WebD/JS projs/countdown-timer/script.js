const dayEl  = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secEl = document.getElementById('secs');

const newYears = '10 Feb 2024'

function countdown(){
    const curDate = new Date();
    const newDate = new Date(newYears);

    const tsec = (newDate-curDate)/1000;
    const day = Math.floor(tsec/3600/24);
    const hour = Math.floor(tsec/3600)%24;
    const min =Math.floor(tsec/60)%60;
    const sec = Math.floor(tsec%60);

    const time = [day,hour,min,sec]

    

    dayEl.innerHTML= formatTime(day);
    hourEl.innerHTML=formatTime(hour);
    minEl.innerHTML= formatTime(min);
    secEl.innerHTML= formatTime(sec);
}

function formatTime(time){
    return time <10 ? `0${time}`:time;
}

//initial call
countdown();

setInterval(countdown,1000);