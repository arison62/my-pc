import { list } from 'postcss';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#211F1F",
        light: "#F7F7F7",
        hoverColor: "#595959",
        primaryColor: "#363636",
        secondaryColor: "#313131",
        ternaryColor: "#272727",
        accentColor: "#94EBEB",
        activeColor: "#F28C2A",
      },
      backgroundImage : {
        img : `url('assets/background.jpg')`
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
