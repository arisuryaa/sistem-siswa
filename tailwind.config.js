/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs", "./js/*.js"],
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
      boxShadow: {
        shadowcus: "0px 3px 5px rgba(0, 0, 0, 0.25) ",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Atur tema default ke "light"
  },
};
