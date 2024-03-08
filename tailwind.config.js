/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      
    },
    fontFamily: {
      sans: ["roboto"],
      poppins: ["poppins"],
    },
    container: {
      padding: "12px",
      margin: "auto",
      maxWidth: "1140px",
    },
  },
  plugins: [],
};
