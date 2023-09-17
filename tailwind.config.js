/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto-regular": "RobotoRegular",
        "roboto-bold": "RobotoBold",
        "roboto-thin": "RobotoThin",
        "roboto-condence": "Condenced",
      },
      colors: {
        dark: "#222",
        darkest: "#111",
        light: "#ccc",
        lightest: "#eee",
      },
      padding: {
        pad: "1rem",
        "pad-2": "2rem",
        "pad-3": "3rem",
        "pad-4": "4rem",
        "pad-5": "5rem",
      },
    },
  },
  plugins: [],
};
