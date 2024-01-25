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
        pulsegardiantTwo: "pulsegardiantTwo 1s linear infinite",
      },
      keyframes: {
        pulsegardiant1: {
          "0%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        pulsegardiantTwo: {
          "0%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
