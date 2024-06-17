console.log('NASA API');

async function getData(apiKey){
    try {
        const result = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const infoFromServer = await result.json(); 

            const content = document.querySelector("#nasa-info");
            content.innerHTML = `
                <p class="label">Title:</p>
                <p>${infoFromServer.title}</p>
                <p class="label">Date:</p>
                <p>${infoFromServer.date}</p>
                <p class="label">Explanation:</p>
                <p>${infoFromServer.explanation}</p>
                <p class="label">Video:</p>
                <p>${infoFromServer.url}</p>
        `;
 
    } catch (error) {
    console.log('Error: ', error);
    }    
}

getData(`izsisVkJ6D4nSSphn8g4UBzsi7EYesFbma7WiUZC`);