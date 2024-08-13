/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "system-ui",
          "-apple-system",
          "Roboto",
          "Noto Sans",
          "sans-serif",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: [
              "Pretendard",
              "system-ui",
              "-apple-system",
              "Roboto",
              "Noto Sans",
              "sans-serif",
            ],
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
