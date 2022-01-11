module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        "poster-card": "40%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
