document.querySelector('button').addEventListener('click', async (e) => {
    e.preventDefault();
    const userInput = document.querySelector('#domainInput').value.trim();
    if (!userInput) {
        alert('Enter the Domain');
        return;
    }
    // console.log(userInput);
    try {
        const response = await getDetails(userInput);
        displayResult(response);
    } catch (error) {
        console.log(error);
        throw new Error('Something Went Wrong!!!')
    }
});

async function getDetails(userInput) {
    const URL = `https://api.api-ninjas.com/v1/whois?domain=${encodeURIComponent(userInput)}`;
    const API_KEY = 'GctqLQqeZlWn0Y5GvTq8mQ==1s8dYmGmsVtDuYqj'; //put your api key here (ninjaAPI)

    const response = await fetch(URL, {
        headers: {
            'X-Api-Key': API_KEY
        }
    });

    if(!response.ok){
        alert('Something Went Wrong');
        throw new Error('Request Failed');
    }

    return response.json();
}

function displayResult(response) {
    // console.log(response);
    // console.log(response.name_servers);  
    document.getElementById('domainName').innerHTML = response.domain_name;
    document.getElementById('registrar').innerHTML = response.registrar;
    document.getElementById('whoisServer').innerHTML = response.whois_server;

    const nameServersDiv = document.getElementById('nameServers');
    nameServersDiv.innerHTML = '';

    response.name_servers.forEach(ns => {
        const element = document.createElement('div');
        element.innerText = ns;
        nameServersDiv.appendChild(element);
    });

    document.getElementById('updatedAt').innerHTML = `${new Date(response.updated_date * 1000).toLocaleString()}`
    document.getElementById('createdAt').innerHTML = `${new Date(response.creation_date * 1000).toLocaleString()}`

    document.getElementById('result-card').style.display = 'block';
}
