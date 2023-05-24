const ModalslidesContainer = document.getElementById('modal-slides-container');
const Modalslide = document.querySelector('#modal-slide');
const ModalprevButton = document.getElementById('modal-slide-arrow-prev');
const ModalnextButton = document.getElementById('modal-slide-arrow-next');
const ModallistImages = document.querySelectorAll('#modal-slide').length;

if (ModallistImages < 2) {
  ModalprevButton.style.display = 'none';
  ModalnextButton.style.display = 'none';
}

ModalnextButton.addEventListener('click', () => {
  const slideWidth = Modalslide.clientWidth;
  ModalslidesContainer.scrollLeft += slideWidth;
});
ModalprevButton.addEventListener('click', () => {
  const slideWidth = Modalslide.clientWidth;
  ModalslidesContainer.scrollLeft -= slideWidth;
});
