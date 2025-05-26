/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0206",
        seconday: "#405054",
      },
      screens: {
          'max-1050':{'max':'1050px'},
          'max-750': {'max':'750px'},
      },
      gridTemplateColumns: {
         'auto':'repeat(auto-fill,minmax(240px,1fr))'
      },
      gridtemplatecolums: {
          "new" : "1fr 1.5fr 1fr 1fr 1fr 0.5fr"
      } ,
      container: {
        center: true,
        padding : {
          DEFAULT: "1rem",
          sm: "2rem"
        }
      }
    },
  },
  plugins: [],
}
