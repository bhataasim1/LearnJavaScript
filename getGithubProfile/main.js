const submitButton = document.querySelector('.submit');
const inputField = document.querySelector('input');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let userInput = String(inputField.value);
    checkUser(userInput);
})

function checkUser(userInput) {
    console.log(userInput);
    const request = new XMLHttpRequest();
    
    let url = `https://api.github.com/users/${userInput}`;
    
    request.open('GET', url);
    
    request.addEventListener('load', getData);
    
    function getData() {
        if (request.status == 200) {
            const data = JSON.parse(this.responseText);
    
            const profileImage = document.querySelector('img');
            profileImage.src = data.avatar_url;
            profileImage.alt = data.name;
            profileImage.style.width = '100%';
    
            const profileLink = document.querySelector('a');
            profileLink.href = data.html_url;
            
            const name = document.querySelector('.name').innerHTML = data.name;
    
            const userdetails = document.querySelectorAll('p');
            userdetails.forEach((user) => {
                if (user.className == 'username') {
                    user.innerHTML = `${data.login}`
                }
                if (user.className == 'bio') {
                    user.innerHTML = `${data.bio || 'NA'}`
                }
                if (user.className == 'followers') {
                    user.innerHTML = `Followers: ${data.followers}`
                }
            });
        } else {
            const errorMessage = document.createElement('h1');
            errorMessage.innerText = `${request.status, request.responseText}`
            document.body.appendChild(errorMessage);
        }
    }
    
    request.send();
}

