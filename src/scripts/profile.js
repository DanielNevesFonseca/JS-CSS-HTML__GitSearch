function changeUser(){
  const button = document.querySelector('.profile__header > button');
  button.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = '../../index.html';
  })
}

function renderHeader() {
  const headerContent = document.querySelector('.profile__div');
  const userData = JSON.parse(localStorage.getItem('user'));
  // coloquei a limpeza dentro para renderizar caso tenha algo dentro do localStorage
  // caso contrário têm um modelo de template renderizado
  if (userData.length !== 0) {
    headerContent.innerHTML = '';
    headerContent.insertAdjacentHTML('beforebegin',
      `
      <div class="profile__div">
        <img class="profile__photo" src="${userData.avatar_url}" alt="Foto de ${userData.name}" />
        <p>${userData.name}</p>
      </div>
    `)
  }

}

async function renderRepositories() {
  const repositoriesContainer = document.querySelector('.profile__ul');
  const userData = JSON.parse(localStorage.getItem('user'));

  await fetch(`https://api.github.com/users/${userData.login}/repos`, {
    method: "GET", 
  })
    .then(response => response.json())
    .then(responseJson => {
      const repositoriesArray = responseJson;

      if (repositoriesArray.length !== 0) {
          // coloquei a limpeza dentro para renderizar caso tenha algo dentro do localStorage
          // caso contrário têm um modelo de template renderizado
        repositoriesContainer.innerHTML = "";

        repositoriesArray.forEach(repository => {
          if (repository.description === null) {
            repository.description = 'Repositório sem descrição';
          }
          repositoriesContainer.insertAdjacentHTML('afterBegin',
            `
          <li>
            <h4>${repository.name}</h4>
            <p>${repository.description}</p>
            <a href="${repository.html_url}" target="_blank">Repositório</a>
        </li>
        `)
        })
      }
    });
}
changeUser();
renderHeader();
renderRepositories();