/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#f9f8f3',
      secondary: '#4e13d1',
    },
  },
  plugins: [require('flowbite/plugin')],
}