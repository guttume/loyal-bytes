/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkerText: "#2D3957",
        darkText: "#273E74",
        beige: "#FBF5F1",
        beigeDark: "#EBD4AC",
        accent: "#0077bd",
        primary: "#f58634",
        secondary: "#faa954",
        tertiary: "#ffcc29",
        footer: "#3E99CF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        revolve: {
          from: { transform: "rotate(180deg) translateX(580px) rotate(180deg)" },
          to: { transform: "rotate(360deg) translateX(580px) rotate(0deg)" },
        },
        server: {
          from: { transform: "rotate(90deg) translateX(580px) rotate(270deg)" },
          to: { transform: "rotate(360deg) translateX(580px) rotate(0deg)" },
        },
        office: {
          from: { transform: "rotate(360deg) translateX(480px) rotate(0deg)" },
          to: { transform: "rotate(180deg) translateX(480px) rotate(180deg)" },
        },
        bounce: {
          "0%, 100%": {
            transform: 'translateY(-4%)',
            "animation-timing-function": 'cubic-bezier(0.8, 0, 1, 1)'
          },
          "50%": {
            transform: 'translateY(0)',
            "animation-timing-function": 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        revolve: "revolve 50s linear infinite",
        server: "server 75s linear infinite",
        office: "office 50s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
