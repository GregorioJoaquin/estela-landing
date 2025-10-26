/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        estela: {
          green: "#5f7c4f",
          yellow: "#EBCB68",
          beige: "#F3EDE2",
          dark: "#2D2A26",
          navy: "#0B1D3A",
          midnight: "#10254C",
          deep: "#12315C",
        },
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["\"Poppins\"", "sans-serif"],
      },
      boxShadow: {
        soft: "0 25px 50px -20px rgba(45, 42, 38, 0.35)",
      },
      backgroundImage: {
        "hero-field": "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
