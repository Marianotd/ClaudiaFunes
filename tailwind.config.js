/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#ffe7ce',
        secondary: '#fdc386',
        textMain: '#444',
      },
      boxShadow: {
        navLink: '0px 0px 4px 1px #00000033',
        drawer: '0px 1px 8px 0px #00000026',
        cardContainer: '0px 0px 8px 1px #00000026',
        cardButton: '0px 0px 4px 0.5px #00000026',

        custom: '0px 0px 20px 2px #00000033',
        modal: '0px 0px 12px 0px #00000080',
        customTable: '0px 0px 4px 1px #00000026',
        questions: '0px 0px 12px 2px #00000026',
        history: '0px 0px 16px 1px #00000026',
      },
      fontFamily: {
        customFont: ["Work Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

