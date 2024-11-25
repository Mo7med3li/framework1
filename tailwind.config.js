/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#1abc9c",
        second: "#2c3e50",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
