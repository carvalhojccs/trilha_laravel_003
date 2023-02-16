/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/_.blade.php",
    "./resources/\*\*/_.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
