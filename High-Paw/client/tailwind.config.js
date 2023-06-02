/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      //custom colors --> import the class in the react component
      colors: {
        " myGray": "#1F2937",
        active: "#3B82F6",
      },
      blop: {
        "blop:nth-child(2)": "filter: blur(50px)",
      },
      plugins: [require("@tailwindcss/typography")],
    },
  },
};
