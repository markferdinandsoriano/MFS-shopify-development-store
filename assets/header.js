const searchObj = {
  isOpen: false,
  toggleOpen: () => {
    searchObj.isOpen = !searchObj.isOpen;
  },
};

document.addEventListener('DOMContentLoaded', function (event) {
  // Code to be executed when the DOM content is loaded

  const searchElement = document.getElementById('search-icon');
  const searhBarField = document.getElementById('search-bar-field');

  searhBarField.style.display = 'none';

  searchElement.addEventListener('click', () => {
    searchObj.toggleOpen();
    searhBarField.style.display = searchObj.isOpen ? 'block' : 'none';
  });
});
