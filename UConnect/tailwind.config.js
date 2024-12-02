//tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        uConnectDark: {
          layer1: "#000000",
          layer2Primary: "#414040",
          layer2Secondary: "#1D1C1C",
          layer3: "#C6C3C3",
          textMain: "#FFFFFF",
          textSub: "#C6C3C3",
          accent: "#FC9D04",
          background: "#131313",
          textBox: "#3F3F3F",
        },
        uConnectLight: {
          layer1: "#FFFFFF",
          layer2Primary: "#F3F4F6",
          layer2Secondary: "#E5E7EB",
          layer3: "#D1D5DB",
          textMain: "#000000",
          textSub: "#6B7280",
          accent: "#FC9D04",
          background: "#F9FAFB",
          textBox: "#a1a1aa",
        },
      },
      animation: {
        flicker: "flicker 3.5s ease-in", // Apply the flicker animation
      },
      keyframes: {
        flicker: {
          "0%": { backgroundColor: "#131313" }, // Initial dark color
          "20%": { backgroundColor: "#1D1C1C" }, // Light flicker color
          "50%": { backgroundColor: "#1D1C1C" }, // Stay in the lighter color
          "80%": { backgroundColor: "#1D1C1C" }, // Longer duration in dark color
          "100%": { backgroundColor: "#131313" }, // Final return to the dark color
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
