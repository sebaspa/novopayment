/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": {
          50: "#f0f1ff",
          100: "#e4e5ff",
          200: "#ccceff",
          300: "#a4a6ff",
          400: "#7570ff",
          500: "#4937ff",
          600: "#320fff",
          700: "#2100ff",
          800: "#1a00da",
          900: "#1500a1",
        },
        "robins-egg-blue": {
          50: "#eefffb",
          100: "#c6fff5",
          200: "#8effee",
          300: "#4dfbe4",
          400: "#19e8d3",
          500: "#00dcc9",
          600: "#00a49a",
          700: "#02837c",
          800: "#086763",
          900: "#0c5552",
        },
      },
    },
  },
  plugins: [],
};
