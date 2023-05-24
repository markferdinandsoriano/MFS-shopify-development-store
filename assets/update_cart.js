document.addEventListener('DOMContentLoaded', function () {
  const priceQuantityDiv = document.querySelectorAll('[data-key]');
  const update_input = document.querySelectorAll('[data-id="update_input"]');
  const cartTotalPrice = document.querySelector('#cart-total-price');

  let totalValue = 0;

  [...update_input].forEach((items, index) => {
    items.addEventListener('click', (event) => {
      totalValue +=
        priceQuantityDiv?.[index]?.querySelector('[data-id="price"]')?.textContent.replace('₱', '') *
        Number(event.target.value);

      cartTotalPrice.innerHTML = `Subtotal: ₱${totalValue.toFixed(2)}`;
    });
  });
});
