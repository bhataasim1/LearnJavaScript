const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const userInput = document.querySelector('#cityInput').value.trim();
    if(!userInput){
        console.log('Enter the City Name');
        return;
    }
    // console.log(userInput);
    try {
        const response = await getWeather(userInput);
        displayWeather(response, userInput);
    } catch (error) {
        console.log(error);
    }
});

async function getWeather(userInput) {
    const URI = `https://api.api-ninjas.com/v1/weather?city=${encodeURIComponent(userInput)}`;
    const APIKEY = 'GctqLQqeZlWn0Y5GvTq8mQ==1s8dYmGmsVtDuYqj'; //put your api key here (ninjaAPI)
    const response = await fetch(URI, {
        headers: {
            'X-Api-Key': APIKEY
        }
    });

    if (!response.ok) {
        throw new Error('Failed to get the Details');
    }

    return await response.json();
}

function displayWeather(weatherData, userInput) {
    console.log(weatherData);

    document.querySelector('#cityName').innerHTML = String(userInput).toUpperCase();
    document.querySelector('#temperature').innerHTML = weatherData.temp;
    document.querySelector('#windSpeed').innerHTML = weatherData.wind_speed;
    document.querySelector('#humidity').innerHTML = `${weatherData.humidity}%`;
}
