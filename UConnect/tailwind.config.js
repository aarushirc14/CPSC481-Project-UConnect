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
        },
      },
    },
  },
  plugins: [],
};
