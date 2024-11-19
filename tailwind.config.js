/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Bg-fromColor": "#121826cc",
        "Bg-toColor": "#394150",
        "TransBg-Btn": "#3662E3",
        "Bg-lang": "#4D5562",
      },
    },
  },
  plugins: [],
}
