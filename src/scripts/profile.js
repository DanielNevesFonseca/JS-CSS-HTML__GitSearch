import { renderHeader, renderRepositories } from "./render.js";

function changeUser(){
  const button = document.querySelector('.profile__header > button');
  button.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = '../../index.html';
  });
}

changeUser();
renderHeader();
renderRepositories();