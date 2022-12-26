/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '0.1': '0.063rem'
      },
      backgroundImage: {
        'mobile-app': 'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)'
      },
      colors: {
        'brand-color': '#5d3ebc', 
        'header-color': "rgb(219, 219, 255)",
        'secondary-color': "#7849f7",
        'slider-gradient-primary-color': "#7849f7",
        'yellow-button-color': '#ffd300',
        'category-color': '#191919'
      }
    },
  },
  plugins: [],
}
