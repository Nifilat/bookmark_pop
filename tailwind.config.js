/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0071f5',
        mainBlue: '#0067DF',
        black: '#0C1015',
        black50: '#35383C',
        featuresBg: 'rgba(244, 249, 255, 0.6);',
      },
      blackShadow: '2px 2px 15px;',
      screens: {
        tablets: { min: '641px' },
        phone: { max: '640px' },
        print: { raw: 'print' },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
