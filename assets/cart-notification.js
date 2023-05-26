class CartNotificationModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
        #backdrop {
            position:fixed;
            top:0;
            left:0;
            width: 100%;
            height: 100vh;
            background: rgba(0,0,0,0.75);
            z-index:10;
            opacity:0;
            pointer-events:none;
        }

        #modal {
            overflow-y:auto;
            position:fixed;
            align-self:center;
            margin:auto;
            top:15vh;
            left:50%;
            transform: translateX(-50%);
            width:60%;
            height:auto;
            z-index:100;
            background: white;
            border-radius: 3px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.26);
            opacity:0;
            pointer-events:none;
        }

        :host([opened]) #backdrop,
        :host([opened]) #modal {
            opacity:1;
            pointer-events:all;
        }

        #modal header {
            width:100%;
            height:10%;
            display:flex;
            flex-direction: row;
            align-items:center;
            justify-content: space-between;
            border-bottom: 1px solid black;
        }

        #modal header #close-icon {
            margin-right: 1em;
            color:red;
            font-size: clamp(1.2vw,1.2vw,1.5vw);
        }

        #modal header #close-icon:hover {
            cursor: pointer;
            transform: scale(1.2);
        }

        #modal header #added-text {
            margin-left: 1em;
            font-weight:400;
            font-size: clamp(1.2vw,1.2vw,1.5vw);
        }

        #modal #body {
            width: 100%;
            height:90%;
            display:flex;
        }

    </style>
    <div id="backdrop"></div>
    <div id="modal">
        <header>
            <h2 id="added-text">Added To Cart</h2>
            <h2 id="close-icon">X</h2>
        </header>
        <section id="body">
            <slot name="product-body"></slot>
        </section>
     
    </div>
    `;

    this.closeIcon = this.shadowRoot.querySelector('#close-icon');
    const slot1 = this.shadowRoot.querySelector('slot[name="product-body"]');
    this.quantityValue = slot1.assignedElements()[0].querySelector('#quantity-value');
    this.quantityInput = slot1.assignedElements()[0].querySelector('[data-key]');
    this.productPriceValue = slot1.assignedElements()[0].querySelector('#product-price');
    this.variantsTitle = slot1.assignedElements()[0].querySelector('#variants-title');
    this.variantInputId = slot1.assignedElements()[0].querySelector('#variant-id');
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
  }

  connectedCallback() {
    this.closeIcon.addEventListener('click', this._handleCloseIcon.bind(this));
  }

  disconnectedCallback() {
    this.closeIcon.removeEventListener('click', this._handleCloseIcon, true);
  }

  _handleCloseIcon() {
    this.removeAttribute('opened');
  }

  _getQuantityValue(value) {
    this.quantityValue.textContent = `Qty: ${value}`;
    this.quantityInput.value = value;
  }

  _updateProductPrice(price) {
    this.productPriceValue.textContent = `Price: ${price}`;
  }

  _getVariants(variantID) {
    const getVariantValue = this.variantData.find((items) => items.id.toString() === variantID);
    const variantValue = getVariantValue?.title;
    this.variantsTitle.textContent = `Variants:  ${variantValue}`;
    this.variantInputId.value = variantID;
  }
}

customElements.define('cart-notification', CartNotificationModal);

const addToCartBtn = document.querySelector('#addToCart');
const cartModal = document.querySelector('cart-notification');
const submitForm = document.querySelector('#product-form');

submitForm.addEventListener('submit', (event) => {
  const variantId = document.querySelector('#variant-id')?.value;
  const quantityValue = document.querySelector('#quantity-value')?.textContent;
  const cartCountElement = document.querySelector('#cart-counts');

  event.preventDefault();

  let formData = {
    items: [
      {
        id: variantId,
        quantity: quantityValue,
      },
    ],
  };

  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cartCountElement.textContent = parseInt(cartCountElement.textContent) + parseInt(data.items?.length);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

addToCartBtn.addEventListener('click', () => {
  cartModal.setAttribute('opened', '');

  const quantityValue = document.querySelector('#quantity-value');
  const productPrice = document.querySelector('#product-price');
  const variantId = document.querySelector('#variant-id');

  cartModal._getQuantityValue(quantityValue.textContent);
  cartModal._updateProductPrice(productPrice.textContent);
  cartModal._getVariants(variantId.value);
});
