/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'Mobile': '420px',
         
      },
      scale:{
        '275':'2.75',
      },
      fontFamily:{
        'Sen':['Sen', 'sans-serif']
      }
    },
  },
  plugins: [],
}

