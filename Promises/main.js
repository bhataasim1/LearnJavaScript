const promiseOne = new Promise(function (resolve, reject) {
    let error = false;
    if (!error) {
        resolve({
            'name': 'Aasim',
            'Email': 'LearnJS@aasim.com',
        });
    } else {
        reject();
    }
});

promiseOne.then(function (data) {
    document.querySelector('p').innerHTML = `${data.name} ${data.Email}`
}).catch(() => {
        console.log('Error Occured');
    })


async function getAllGithubUsers() {
    try {
        const url = 'https://api.github.com/users/bhataasim1';
        const data = await fetch(url);
        const converted = await data.json();
        // console.log(converted);
        const para = document.createElement('p');
        document.body.appendChild(para).innerHTML = `${converted.login}`

        const image = document.createElement('img');
        image.src = converted.avatar_url;
        image.style.borderRadius = '10px'
        document.body.appendChild(image);

    } catch (error) {
        console.log(error);
    }
}
getAllGithubUsers();

const githubUser = fetch('https://api.github.com/users/bhataasim1');

githubUser.then( (respose) => {
    return respose.json();
}).then( (user) => {
    console.log(user);
}).catch( (error) => {
    console.log(error);
})