async function searchUser() {

  const input = document.querySelector('.index__input');
  const searchButton = document.querySelector('.index__button');
  const spinner = document.querySelector('.spinner');

  searchButton.addEventListener('click', async (event) => {
    event.preventDefault();

    await fetch(`https://api.github.com/users/${input.value}`, {
      method: "GET",
    })
    .then(function (response) {
      spinner.classList.remove('hidden');
    setTimeout(async () => {
        if (response.ok) {
          const responseContent = await response.json();
          localStorage.setItem('user', JSON.stringify(responseContent));
          window.location.href = './src/pages/profile.html'; // redirecionamento de página
        } else {
          window.location.href = './src/pages/error.html';
        }
      }, 2000);
    })  
  })
}
searchUser();