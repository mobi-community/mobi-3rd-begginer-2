/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayScale: {
          600: "#000000",
          500: "#292929",
          400: "#4e4e4e",
          300: "#777777",
          200: "#a2a2a2",
          100: "#d0d0d0",
          0: "#ffffff",
        },

        theme: {
          main: {
            light: "#B5CFFA",
            normal: "#6E99E5",
            thick: "#2964C7",
          },
          mainOppsite: {
            light: "#78B877",
            normal: "#8EB33A",
            thick: "#58B236",
          },
        },
        system: {
          warning: {
            light: "#C69F9A",
            normal: "#E57B6D",
            thick: "#E1270D",
          },
          positive: {
            light: "#B0D4E0",
            normal: "#5DD0E5",
            thick: "#12A8C7",
          },
          notice: {
            light: "#D1C49F",
            normal: "#E6E368",
            thick: "#E1DE00",
          },
        },
      },
      fontSize: {
        tiny: "1.4rem",
        small: "1.8rem",
        medium: "2.0rem",
        large: "2.4rem",
        big: "3.2rem",
        huge: "4.8rem",
      },
    },
  },
  plugins: [],
}
