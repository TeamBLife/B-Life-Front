/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        ZeroToFullSize: {
          "100%": { transform: "scale(1)" },
          "0%": { transform: "scale(0)" },
        },
        SlideAnimation: {
          "0%": { transform: "translateX(200px)", opacity: 0 },
          "10%": { transform: "translateX(0)", opacity: 1 },
          "90%": { opacity: 1 },
          "100%": { transform: "translateX(0)", opacity: 0 },
        },
      },
      textShadow: {
        DEFAULT: "0 0 20px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
