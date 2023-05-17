// const childObj = {
//   isOpen: false,
//   toggleOpen: () => {
//     childObj.isOpen = !childObj.isOpen;
//   },
// };

// const handleOpenChildLink = (id) => {
//   const dataId = id.getAttribute('data-id');

//   const childlink = document.getElementById(dataId);

//   childObj.toggleOpen();
//   childlink.style.display = childObj?.isOpen ? 'block' : 'none';
// };

// const clickAway = (e) => {
//   e.addEventListener('click', function (event) {
//     console.log('event target', event.target);
//   });
// };

// window.onload = function () {
//   const dropDownMenu = document.getElementById('drop-down-menu');
//   const burgerIcon = document.getElementById('hamburger-menu');
//   const closeIcon = document.getElementById('close-menu');

//   closeIcon.style.display = 'none';
//   dropDownMenu.style.display = 'none';

//   burgerIcon.addEventListener('click', () => handleCloseOpen('burger'));

//   closeIcon.addEventListener('click', () => handleCloseOpen('close'));
// };

// const handleCloseOpen = (name) => {
//   const burgerIconElement = document.getElementById('hamburger-menu');
//   const dropDownMenu = document.getElementById('drop-down-menu');
//   const closeIconElement = document.getElementById('close-menu');

//   let closeIcon = false;
//   let burgerIcon = false;

//   name === 'burger' ? ((burgerIcon = true), (closeIcon = false)) : ((burgerIcon = false), (closeIcon = true));

//   if (burgerIcon) {
//     dropDownMenu.style.display = 'flex';
//     burgerIconElement.style.display = 'none';
//     closeIconElement.style.display = 'flex';
//   } else if (closeIcon) {
//     dropDownMenu.style.display = 'none';
//     burgerIconElement.style.display = 'flex';
//     closeIconElement.style.display = 'none';
//   } else {
//     dropDownMenu.style.display = 'none';
//     burgerIconElement.style.display = 'none';
//     closeIconElement.style.display = 'none';
//   }
// };
