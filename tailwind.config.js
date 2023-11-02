/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "350px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        rotateSlow: "rotateCircle 14s linear infinite",
        rotateFast: "rotateCircle 10s linear infinite",
        noRotate: "none",
        counterClock: "reverse-spin 14s linear infinite",
        counterClockInner: "reverse-spin 7s linear infinite",
      },
      keyframes: {
        rotateCircle: {
          from: {
            rotate: "0deg",
          },
          to: {
            rotate: "360deg",
          },
        },

        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
