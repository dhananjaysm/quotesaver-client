/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // feedpage: "rgb(243,242,239)",
        feedpage: "#fefdef",
        brownPrimary: "#a75a1c",
        orangePrimary: "#ce4806",
      },
    },
  },
  plugins: [],
};
