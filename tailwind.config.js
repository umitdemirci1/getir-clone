/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'brand-color': '#5d3ebc', 
      },
      textColor: {
        'header-color': "rgb(219, 219, 255)"
      }
    },
  },
  plugins: [],
}
