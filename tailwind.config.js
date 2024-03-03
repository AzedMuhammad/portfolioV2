/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A2647",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        customfont: ["customfont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
