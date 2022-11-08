/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "hsl(0, 0%, 75%)",
        "custom-gray-2": "#f0f0f0",
        "Grayish-Violet": "hsl(257, 7%, 63%)",
        "Dark-Blue": "hsl(255, 11%, 22%)",
        "Dark-Violet" : "hsl(257, 27%, 26%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage:{
        'shorten-mobile' : "url('../assets/images/bg-shorten-mobile.svg')",
        'boost-mobile' : "url('../assets/images/bg-boost-mobile.svg')"
        
      }
    },
  },
  plugins: [],
};
