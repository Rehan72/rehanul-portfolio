/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        card: "#101622",
        accent: "#57FFA7",
        accent2: "#7AE0FF",
        text: "#E6EEF7",
        subtext: "#9FB3C8"
      },
      boxShadow: { glow: "0 0 30px rgba(87,255,167,0.25)" },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(122,224,255,0.08) 1px, transparent 1px)"
      },
      backgroundSize: { grid: "20px 20px" }
    }
  },
  plugins: []
};