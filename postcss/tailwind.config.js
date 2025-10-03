/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
        center: true,
      },
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

