const time = document.getElementById('time');

function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let meridian = 'AM';

    if(hour > 12){
        hour = hour - 12;
        meridian = 'PM';
    }

    let currentTime = `${hour} : ${minute} : ${second} ${meridian}`;
    time.textContent = currentTime;
}
getTime();
setInterval(getTime, 1000);