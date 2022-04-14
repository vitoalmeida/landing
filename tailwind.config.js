module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
      roboto: ["Roboto Condensed"],
    },
    extend: {
      colors: {
        primary: "#180636",
        secondary: "#07FDAA",
        tertiary: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
