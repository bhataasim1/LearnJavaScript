const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const userInput = document.querySelector('input').value;

    try {
        const userData = await fetchGitHubUser(userInput);
        displayUserData(userData);
    } catch (error) {
        console.error(error);
    }
});

async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('User not found or API request failed');
    }

    return response.json();
}

function displayUserData(user) {
    const profileImage = document.querySelector('.profile');
    profileImage.src = user.avatar_url;

    document.querySelector('.profile-name').innerHTML = user.name || user.login;
    document.querySelector('.about').innerHTML = user.bio || 'User has No Bio';

    const profileLink = document.querySelector('a');
    profileLink.href = user.html_url;

    document.querySelector('.follow-btn').innerHTML = `Followers: ${user.followers}`;
}
