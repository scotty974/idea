/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#10768D" ,
        secondary : "#A5F2ED"
      }
    },
  },
  plugins: [],
}