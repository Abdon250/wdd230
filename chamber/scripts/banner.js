document.addEventListener('DOMContentLoaded', function() {
    // Fetch current weather data from OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kigali&units=metric&appid=497a9fbde8ed96e7f5035fc201caab90')
        .then(response => response.json())
        .then(data => {
            const currentTemperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const weatherInfoElement = document.getElementById('weather-info');
            weatherInfoElement.innerHTML = `<p>Temperature: ${currentTemperature}°C</p>
                                           <p>Condition: ${weatherDescription}</p>`;
        });

    // Toggle between grid and list view
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const directoryContainer = document.querySelector('.directory-container');

    gridButton.addEventListener('click', function() {
        directoryContainer.classList.remove('list-view');
        directoryContainer.classList.add('grid-view');
    });

    listButton.addEventListener('click', function() {
        directoryContainer.classList.remove('grid-view');
        directoryContainer.classList.add('list-view');
    });

    // Close banner if the user clicks the button
    const closeBannerBtn = document.getElementById('closeBannerBtn');
    closeBannerBtn.addEventListener('click', function() {
        const bannerElement = document.querySelector('.banner');
        bannerElement.style.display = 'none';
    });

    // Countdown timer for the event
    const eventDate = new Date('2023-11-01T19:00:00Z').getTime();

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = 'EXPIRED';
        }
    }, 1000);

    // Fetch and display member spotlights from the JSON file
    fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        const goldSilverMembers = data.members.filter(member => member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver');
        const numberOfMembersToShow = 3;
        const selectedMembers = [];

        while (selectedMembers.length < numberOfMembersToShow && goldSilverMembers.length > 0) {
            const randomIndex = Math.floor(Math.random() * goldSilverMembers.length);
            const member = goldSilverMembers.splice(randomIndex, 1)[0];

            // Check if the member object has all necessary properties and they are not empty
            if (member &&
                member.name && member.name.trim() !== '' &&
                member.image && member.image.trim() !== '' &&
                member.website && member.website.trim() !== '' &&
                member.membershipLevel && member.membershipLevel.trim() !== '') {
                selectedMembers.push(member);
            }
        }

        const directoryContainer = document.querySelector('.directory-container');
        selectedMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('directory-card');

            const memberImage = document.createElement('img');
            memberImage.src = member.image;
            memberImage.alt = member.name;
            memberImage.style.width = '150px'; // Set member image width to 150px

            const memberLink = document.createElement('a');
            memberLink.href = member.website;
            memberLink.classList.add('member-link');
            memberLink.appendChild(memberImage);
            memberCard.appendChild(memberLink);

            const memberName = document.createElement('h3');
            memberName.textContent = member.name;

            const memberDescription = document.createElement('p');
            memberDescription.textContent = `Membership Level: ${member.membershipLevel}\n${member.otherInfo || ''}\nAddress: ${member.address || ''}\nPhone: ${member.phone || ''}`;

            memberCard.appendChild(memberName);
            memberCard.appendChild(memberDescription);
            directoryContainer.appendChild(memberCard);

            // Prevent the member card from opening a new tab
            memberLink.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = member.website;
            });
        });
    })
    .catch(error => {
        console.error('Error fetching member spotlights:', error);
    });

    })


