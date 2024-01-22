/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#f4869b" ,
        secondary : "#f4adb9",
        three : "#f4d1d8"
      }
    },
  },
  plugins: [],
}