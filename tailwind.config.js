/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/reset_password.json*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
