module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight:{
        'mainDiv': '1000px',
      },
      fontFamily:{
        'newFont':['Trebuchet MS']
      },
      screens: {
        'desktop': '1350px',
      }
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
