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
      grey: "#C0C0C0",
      lightGrey: "#E8E8E8",
      marineBlue: "hsl(var(--marine-blue) / <alpha-value>)",
      purplishBlue: "hsl(var(--purplish-blue) / <alpha-value>)",
      pastelBlue: "hsl(var(--pastel-blue) / <alpha-value>)",
      lightBlue: "hsl(var(--light-blue) / <alpha-value>)",
      strawberryRed: "hsl(var(--strawberry-red) / <alpha-value>)",
      trueBg: "#ecf3fd",
    },
    fontFamily: {
      ubuntuRg: ["Ubuntu Regular", "sans-serif"],
      ubuntuMd: ["Ubuntu Medium", "sans-serif"],
      ubuntuBl: ["Ubuntu Bold", "sans-serif"],
    },
    screens: {
      phone: "375px",
    },
    extend: {
      backgroundImage: {
        "sidebar-mobile": "url('src/assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
