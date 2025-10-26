/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        estela: {
          green: "#58744C",   // verde oliva
          yellow: "#EBCB68",  // amarillo suave
          beige: "#F3EDE2",   // beige
          dark: "#2D2A26"     // marrón oscuro
        }
      }
    }
  },
  plugins: [],
}
