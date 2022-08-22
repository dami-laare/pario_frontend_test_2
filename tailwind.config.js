/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#5e5e5e",
          2: "#181818",
        },
      },
    },
  },
  plugins: [],
};
