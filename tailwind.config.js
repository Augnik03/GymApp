/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        neonGreen:'#d7ff8a'
      },
      backgroundImage:{
        "gymImg" : "url('./src/assets/gym.jpg')"
      },
      screens: {
        'max' : {'max': '870px'},
        'min1' : {'min': '870px'}
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}