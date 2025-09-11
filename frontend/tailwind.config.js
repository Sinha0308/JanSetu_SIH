// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Pacifico", "cursive"], // 👈 custom font for JanSetu
      },
    },
  },
  plugins: [],
}
