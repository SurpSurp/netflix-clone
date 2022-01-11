module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        "poster-card": "40%",
        "top-rate-poster-card": "55%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
