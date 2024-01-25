/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      animation: {
        pulsegardiant: "pulsegardiant1 1s linear infinite",
      },
      keyframes: {
        pulsegardiant1: {
          "0%": { shadow: "1px 2px 2px 1px #B00000 in" },
        },
      },
    },
  },
  plugins: [],
};
