
const  colorGenerator = function() {
    const hexColor = '0123456789ABCDEF';
    let randomColor = '#';
    for(let i = 0; i< 6; i++) {
        randomColor += hexColor[Math.floor(Math.random() * 16)];
    }
    return randomColor;
};

let intervalID;

let startColorChanging = () => {
    intervalID = setInterval( () => {
        document.body.style.backgroundColor = colorGenerator();
    },1000);
}

let stopColorChanging = function () {
    clearInterval(intervalID)
};

const start = document.getElementById('start').addEventListener('click', startColorChanging);
const stop = document.getElementById('stop').addEventListener('click', stopColorChanging);