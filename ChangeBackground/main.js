const button = document.querySelectorAll('button');

button.forEach( (b) => {
    b.addEventListener('click', function(e) {
        document.body.style.backgroundColor = b.value;
        // document.body.style.backgroundColor = b.className;
    });
})