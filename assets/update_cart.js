const quantityObj = {
  quantity: 1,
  products: [],
  subtotal: 0,
  priceTotal: [],
  setMinusValue: (index) => {
    quantityObj.products[index] -= quantityObj.products[index] && 1;
  },
  setPlusValue: (index) => {
    quantityObj.products[index] += 1;
  },
  setInitialQuantityValue: (value) => {
    quantityObj.quantity = value;
  },
  setSubtotalValue: (value) => {
    quantityObj.subtotal = value;
  },
  setPerProductTotalPrice: (index, value) => {
    quantityObj.priceTotal[index] = value;
  },
  setAddAllPrice: () => {
    quantityObj.subtotal = quantityObj.priceTotal.reduce((acc, val) => {
      return acc + val;
    }, 0);
  },
};

document.addEventListener('DOMContentLoaded', function () {
  const priceQuantityDiv = document.querySelectorAll('[data-key]');
  const update_input = document.querySelectorAll('[data-id="update_input"]');
  const cartTotalPrice = document.querySelector('#cart-total-price');
  const quantityValue = document.querySelectorAll('#quantity-value');
  const customQuantityInput = document.querySelectorAll('[data-id="custom-quantity"]');

  [...customQuantityInput].forEach((items, index) => {
    const minusButton = items.querySelector('#minus-button');
    const plusButton = items.querySelector('#plus-button');
    const selectEachQuantityValue = quantityValue[index];
    const quantityValuePerProduct = parseInt(selectEachQuantityValue.textContent);

    quantityObj.products = [...quantityObj.products, quantityValuePerProduct];
    const priceValue =
      parseFloat(priceQuantityDiv?.[index]?.querySelector('[data-id="price"]')?.textContent.replace('₱', '')) *
      parseInt(quantityValue[index].textContent);

    quantityObj.priceTotal = [...quantityObj.priceTotal, priceValue];

    const handleQuantityActions = (indexValue, action) => {
      if (action === 'minus') {
        quantityObj.setMinusValue(indexValue);
      } else {
        quantityObj.setPlusValue(indexValue);
      }

      quantityValue[indexValue].textContent = quantityObj.products[indexValue];
      update_input[indexValue].value = update_input[indexValue].setAttribute('value', quantityObj.products[indexValue]);

      const value =
        parseFloat(
          priceQuantityDiv?.[indexValue]?.querySelector('[data-id="price"]')?.textContent.replace(/[₱,]/g, '')
        ) * quantityObj.products[indexValue];

      quantityObj.setPerProductTotalPrice(indexValue, value);
      quantityObj.setAddAllPrice();

      cartTotalPrice.innerHTML = `Subtotal: ₱${quantityObj.subtotal.toFixed(2)}`;
    };

    minusButton.addEventListener('click', (event, eventIndex = index) => handleQuantityActions(eventIndex, 'minus'));

    plusButton.addEventListener('click', (event, eventIndex = index) => handleQuantityActions(eventIndex, 'plus'));

    minusButton.removeEventListener('click', handleQuantityActions);
    plusButton.removeEventListener('click', handleQuantityActions);
  });
});
