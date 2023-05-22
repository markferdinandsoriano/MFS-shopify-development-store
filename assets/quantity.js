const quantityObj = {
  quantity: 1,
  setMinusValue: () => {
    quantityObj.quantity = quantityObj.quantity === 0 ? 0 : quantityObj.quantity - 1;
  },
  setPlusValue: () => {
    quantityObj.quantity = quantityObj.quantity + 1;
  },
};

document.addEventListener('DOMContentLoaded', function () {
  // Code to be executed when the DOM content is loaded

  const minusButton = document.querySelector('#minus-button');
  const plusButton = document.querySelector('#plus-button');
  const getInputValue = document.querySelector('[data-key]');
  const quantityValue = document.querySelector('#quantity-value');

  console.log('getInputValue', getInputValue);

  minusButton.addEventListener('click', function () {
    quantityObj.setMinusValue();
    quantityValue.textContent = quantityObj.quantity;
    getInputValue.value = quantityObj.quantity;
  });

  plusButton.addEventListener('click', function () {
    quantityObj.setPlusValue();
    quantityValue.textContent = quantityObj.quantity;
    getInputValue.value = quantityObj.quantity;
  });
});
