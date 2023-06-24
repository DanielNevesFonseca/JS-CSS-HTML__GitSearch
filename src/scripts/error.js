function newSearch() {
  const button = document.querySelector('.new-search');

  button.addEventListener('click', () => {
    window.location.href = '../../index.html';
    localStorage.removeItem('c');
  });
}
newSearch();