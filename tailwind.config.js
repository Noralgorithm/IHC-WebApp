/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-offside": "#7EA6AE",
        "sticker-name": "#34545D",
        "bg-contenedor": "#EFEFEF"
      },
      backgroundImage: {
        "fondo-barajita": "url('/src/Images/fondo.jpg')",
        "marco-barajita": "url('/src/Images/marco.png')",
        "fondo-homepage-fantasy": "url('/src/Images/fondo-jugador-fantasy.png')",
      },
    },
  },
  plugins: [],
};
