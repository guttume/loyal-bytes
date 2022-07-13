/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkerText: "#2D3957",
        darkText: "#273E74",
        beige: "#FBF5F1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
