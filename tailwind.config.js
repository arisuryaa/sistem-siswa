/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/img/bgLogin.svg')",
      },
      colors: {
        primary: "#4A70A5",
        grey: "#5F5F5F",
        secondary: "#234B75",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Atur tema default ke "light"
  },
};
