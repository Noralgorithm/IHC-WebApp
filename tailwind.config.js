/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "offsideColorWine": "#B02419",
        "sticker-name": "#34545D",
        "bg-offside" : "#7EA6AE",
      },
      backgroundImage: {
        "fondo-barajita": "url('/src/Images/fondo.jpg')",
        "marco-barajita": "url('/src/Images/marco.png')",
      },
    },
  },
  plugins: [],
};
