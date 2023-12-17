

function fetchRandomUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const users = data.results;

            const userContainer = document.getElementById('user-container');
            userContainer.innerHTML = '';

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                const userPicture = document.createElement('img');
                userPicture.classList.add('user-picture');
                userPicture.src = user.picture.large;
                userPicture.alt = 'User Picture';

                const userCellphone = document.createElement('p');
                userCellphone.textContent = 'Cellphone: ' + user.cell;

                const userCity = document.createElement('p');
                userCity.textContent = 'City: ' + user.location.city;

                const userPostcode = document.createElement('p');
                userPostcode.textContent = 'Postcode: ' + user.location.postcode;

                const userEmail = document.createElement('p');
                userEmail.textContent = 'Email: ' + user.email;

                userCard.appendChild(userPicture);
                userCard.appendChild(userCellphone);
                userCard.appendChild(userCity);
                userCard.appendChild(userPostcode);
                userCard.appendChild(userEmail);

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    fetchRandomUsers();

    document.getElementById('refresh-button').addEventListener('click', fetchRandomUsers);
});
