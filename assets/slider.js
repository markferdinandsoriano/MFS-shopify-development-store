const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('#slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');
const listImages = document.querySelectorAll('#slide').length;

if (listImages < 2) {
  prevButton.style.display = 'none';
  nextButton.style.display = 'none';
}

nextButton.addEventListener('click', () => {
  console.log('clicccking next');
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener('click', () => {
  console.log('clicccking prev');
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
