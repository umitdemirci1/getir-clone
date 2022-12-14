/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'brand-color': '#5d3ebc', 
      },
      colors: {
        'header-color': "rgb(219, 219, 255)",
        'slider-gradient-primary-color': "#7849f7",
        'yellow-button-color': '#ffd300'
      }
    },
  },
  plugins: [],
}
