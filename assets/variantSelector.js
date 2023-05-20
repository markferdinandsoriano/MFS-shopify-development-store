class VariantCustomElement extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.handleChange);
  }

  handleChange() {
    this.selectOptionsValue();
    this.getSelectedVariant();

    if (this.getSelectedVariant()?.[0]) {
      this.updateURL();
      this.updateFormId();
      this.updatePrice();
    }
  }

  selectOptionsValue() {
    this.array = [...this.querySelectorAll('select')]?.map((items) => items.value);
    return this.array;
  }

  getVariantJSON() {
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }

  getSelectedVariant() {
    this.selectedVariant = this.getVariantJSON().filter((selectedItems) => {
      const result = selectedItems.options.every((items) => this.selectOptionsValue().includes(items));
      return result;
    });

    return this.selectedVariant;
  }

  updateURL() {
    if (!this.getSelectedVariant()[0]) return;
    window.history.replaceState({}, '', `${this.dataset.url}?variant=${this.getSelectedVariant()?.[0]?.id}`);
  }

  updateFormId() {
    const form_input = document.querySelector('#product-form').querySelector('input[name="id"]');
    form_input.value = this.getSelectedVariant()[0].id;
  }

  updatePrice() {
    fetch(`${this.dataset.url}?variant=${this.getSelectedVariant()?.[0]?.id}&section_id=${this.dataset.section}`)
      .then((response) => response.text())
      .then((responseText) => {
        const id = `price-${this.dataset.section}`;
        const html = new DOMParser().parseFromString(responseText, 'text/html');

        const oldPrice = document.getElementById(id);
        const newPrice = html.getElementById(id);

        if (oldPrice && newPrice) oldPrice.innerHTML = newPrice.innerHTML;
      });
  }
}

customElements.define('variant-custom-element', VariantCustomElement);
