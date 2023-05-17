/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/reset_password.json*.liquid',
  ],
  purge: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/reset_password.json*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        main: '#e6eff6',
        second: '#e3dbd9',
        textColor: '#2E4F4F',
        textColor2: '#0E8388',
        textHover: '#524A4E',
        bgGlass: 'rgba(255, 255, 255, 0.96)',
        bdGlass: 'rgba(255, 255, 255, 1)',
      },
      borderRadius: {
        radiusGlass: '16px',
      },
      boxShadow: {
        ShadowGlass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        WidthGlass: '1px',
      },
      screens: {
        sm: { min: '0px', max: '768px' },
      },
    },
  },
  plugins: [],
};
