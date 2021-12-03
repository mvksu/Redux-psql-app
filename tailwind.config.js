module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ["Nunito"] 
  },
    extend: {},
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      scale: ['active', 'group-hover', 'hover'],
      border: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
}
