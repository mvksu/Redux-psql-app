const { colors } = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
  },
    extend: {
      colors: {
        cyan: "#22d3ee",
        teal: {
          "100": "#F0FFF4",
          "500": "#38B2AC",
          "900": "#234E52",
        },
        borderGreen: "#38B2AC"
      }  
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', "disabled"],
      transitionProperty: ['hover', 'focus'],
      scale: ['active', 'group-hover', 'hover'],
      border: ['active', 'group-hover', 'hover'],
      ringWidth: ['active', 'group-hover', 'hover'],
      opacity: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
}
