module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        65: '18rem',
        66: '22rem',
        67: '26rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
