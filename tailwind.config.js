module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["Nunito"],
  },
    extend: {
      colors: {
        cyan: "#22d3ee"
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
    },
  },
  plugins: [],
}
