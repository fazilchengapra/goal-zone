/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const config = {
  darkMode: "class", // Enables manual dark mode with class
  content: ["./pages/**/*.{js,ts,jsx,tsx, html}", "./components/**/*.{js,ts,jsx,tsx, html}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light", // Default DaisyUI theme
      {
        base: {
          "progress-1": "#5742A9", // Fixed hex color format
        },
      },
    ],
  },
};

export default config;
