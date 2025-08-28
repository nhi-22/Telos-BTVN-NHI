/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        18: "72px"
      },
      fontSize: {
        H1: ["72px","92px"],
        H2: ["48px","64px"],
        H3: ["40px","64px"],
        H4: ["32px","48px"],
        H7: ["18px","32px"],
        H8: ["16px","24px"],
        H6: ["14px","20px"],
        Lead1: ["18px","32px"],
        Title: ["40px","54px"]

      },
      colors: {
        primary:
        "#8C30F5"
      },
    },
  },
  plugins: [],
}

