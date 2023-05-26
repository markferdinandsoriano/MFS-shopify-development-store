const searchObj = {
  isOpen: false,
  toggleOpen: () => {
    searchObj.isOpen = !searchObj.isOpen;
  },
};

const fetchData = async () => {
  const cartCountElement = document.querySelector('#cart-counts');

  const resultData = await fetch(window.Shopify.routes.root + 'cart.js')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  cartCountElement.textContent = parseInt(resultData?.items.length);
};

document.addEventListener('DOMContentLoaded', function () {
  const searchElement = document.getElementById('search-icon');
  const searhBarField = document.getElementById('search-bar-field');

  searhBarField.style.display = 'none';

  console.log('mounted');

  fetchData();

  searchElement.addEventListener('click', () => {
    searchObj.toggleOpen();
    searhBarField.style.display = searchObj.isOpen ? 'block' : 'none';
  });
});
