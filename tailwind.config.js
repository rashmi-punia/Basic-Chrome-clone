/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greyish:"#5f6368",
      },
      fontFamily:{
        googleFont:["Google Sans", "arial", "sans-serif"]
      },
      fontWeight:{
        fw:'500'
      },
    },
  },
  plugins: [],
}

