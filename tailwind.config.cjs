/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      grey: "#A9A9A9",
      lightGrey: "#E8E8E8",
      marineBlue: "hsl(var(--marine-blue) / <alpha-value>)",
      purplishBlue: "hsl(var(--purplish-blue) / <alpha-value>)",
      pastelBlue: "hsl(var(--pastel-blue) / <alpha-value>)",
      lightBlue: "hsl(var(--light-blue) / <alpha-value>)",
      strawberryRed: "hsl(var(--strawberry-red) / <alpha-value>)",
      trueBg: "#ecf3fd",
      lightBlack: "#2a2a2a",
      trueLightGrey: "#DCDCDC",
      "invalid-input": "#e53170",
    },
    fontFamily: {
      ubuntuRg: ["Ubuntu Regular", "sans-serif"],
      ubuntuMd: ["Ubuntu Medium", "sans-serif"],
      ubuntuBl: ["Ubuntu Bold", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('src/assets/images/bg-sidebar-mobile.svg')",
      },
      animation: {
        hide: "hide 1s linear 2s forwards",
      },
      keyframes: {
        hide: {
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
