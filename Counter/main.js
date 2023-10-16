const value = document.querySelector('#value');
const btns = document.querySelectorAll('#counter-buttons');

const incr = document.getElementById('increment');
const decr = document.getElementById('decrement');
const reset = document.getElementById('reset');

let count = 0;

btns.forEach(() => {
    incr.addEventListener('click', () => {
        count++;
        value.textContent = count;
        value.style.color = 'green';
    })

    decr.addEventListener('click', () => {
        value.style.color = 'rgb(8, 43, 240)';
        if (count <= 0) {
            value.textContent = count;
            value.style.color = 'red';
        } else {
            count--;
            value.textContent = count;
        }
    })

    reset.addEventListener('click', () => {
        count = 0;
        value.style.color = 'red';
        value.textContent = count;
    })
})

