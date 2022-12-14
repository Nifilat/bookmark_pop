/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0071f5',
        black: '#0C1015',
        black50: '#35383C',
      },
      blackShadow: '2px 2px 15px;',
    },
  },
  plugins: [],
};