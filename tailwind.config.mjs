/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // Enables manual dark mode with class
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
