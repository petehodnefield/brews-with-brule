/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xsm: ["10px", "20px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      0.5: [".5rem", "1rem"],
      0.625: [".625rem", "1rem"],
      0.75: [".75rem", "1rem"],
      0.875: [".875rem", "1.5rem"],
      1: ["1rem", "1.5rem"],
      1.25: ["1.25rem", "1.5rem"],
      1.5: ["1.5rem", "1.5rem"],
      2: ["2rem", "1.5rem"],
      2.5: ["2.5rem", "1.5rem"],
    },
    extend: {
      colors: {
        primary: "#f7c913",
        secondary: "#f8efdc",
        tertiary: "#15616D",
        white: "#ffffff",
        light: "#E1E1E1",
        medium: "#999999",
        dark: "#2c2c2c",
        yellowdark: "#55544A",
      },
      boxShadow: {
        sm: "0 1px 2px  rgba(44, 44, 44, .2)",
        md: "0 8px 16px 0 rgba(85, 84, 74, 0.3)",
      },
      height: {
        eightyvh: "80vh",
      },
      width: {
        30: "30rem",
        34: "34rem",
        660: "41.25rem",
        64: "64rem",
        70: "70rem",
      },
      borderWidth: {
        1: "1px",
      },
      minHeight: {
        28: "28rem",
      },
    },
  },
  plugins: [],
};
