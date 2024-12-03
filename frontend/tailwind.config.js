/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      c1: "#223030",
      c2: "#523D35",
      c3: "#959D90",
      c4: "#BBA58F",
      c5: "#E8D9CD",
      c6: {
        50: "#FBFBFA",
        100: "#EFEFE9",
      },
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};
