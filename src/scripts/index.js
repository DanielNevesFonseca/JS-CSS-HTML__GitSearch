async function searchUser() {

  const input = document.querySelector('.index__input');
  const searchButton = document.querySelector('.index__button');

  searchButton.addEventListener('click', async (event) => {
    event.preventDefault();

    await fetch(`https://api.github.com/users/${input.value}`, {
      method: "GET", 
    })
      .then(function (response) {
        if (response.ok) {
          window.location.href = './src/pages/profile.html';
        } else {
          window.location.href = './src/pages/error.html';
        }
        return response.json();
      })
      .then(function (responseJson) {
        localStorage.setItem('user', JSON.stringify(responseJson));
      });
  })
}

searchUser();