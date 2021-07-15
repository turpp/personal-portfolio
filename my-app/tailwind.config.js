module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight:{
        'mainDiv': '800px'
      },
      fontFamily:{
        'newFont':['Trebuchet MS']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
