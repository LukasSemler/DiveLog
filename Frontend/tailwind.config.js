/* eslint-disable no-undef */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        divelogBlue: '#03C7FC',
        divelogDarkBlue: '#01627D',
        diveRed: '#E84855',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
