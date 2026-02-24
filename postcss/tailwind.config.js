/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.{html,js}"],
   darkMode:'class',
  theme: {
    extend: {
       fontFamily: {
        'sans': ["iranyekan"],
      },
      
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
    strategy: 'class', // only generate classes
  }),
  ],
}

