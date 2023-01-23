/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      0.75: [".75rem", "28px"],
      1: ["1rem", "28px"],
      1.25: ["1.25rem", "28px"],
      2: ["2rem", "32px"],
    },
    extend: {
      colors: {
        primary: "#F6A503",
        secondary: "#f8efdc",
        tertiary: "#15616D",
        white: "#ffffff",
        light: "#E1E1E1",
        medium: "#999999",
        dark: "#2c2c2c",
      },
      boxShadow: {
        sm: "0 1px 2px  rgba(44, 44, 44, .2)",
      },
    },
  },
  plugins: [],
};
