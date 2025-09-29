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
        H11: ["60px","72px"],
        H2: ["48px","64px"],
        H3: ["40px","64px"],
        H4: ["32px","48px"],
        H5: ["28px","40px"],
        H6: ["24px","32px"],
        H7: ["18px","32px"],
        H8: ["20px","24px"],
        H9: ["16px","24px"],
        H10: ["14px","20px"],
        H11: ["96px","102px"],
        Lead1: ["18px","32px"],
        Title: ["40px","54px"],
        DisplayXXL: ["96px","102px"],
        DisplayXL: ["72px","96px"],
        DisplayL: ["60px","72px"],
        DisplayM: ["40px","48px"],
        CaptionL: ["12px","18px"],
        CaptionM: ["10px","18px"]
        
        
        

      
        


      },
      colors: {
        primary:
        "#8C30F5",
        neutral50:"#F5FFFA",
        neutral100:"#B0BEC5",
        neutral200:"#B0B7B3",
        neutral300:"#8A8F8C",
        neutral400:"#626564",
        neutral600:"#3F403F",
        neutral700:"#F5FFFA",
        neutral800:"#1E1E1E",
        neutral900:"#0E0E0E",
        primary300:"#E4E8FB",
        primary400:"#CBD2F9",
        primary500:"#B6BCE4",
        primary600:"#8E9CEA",
        primary700:"#676FB4",
        primary800:"#3A4EB9",
        primary900:"#1A237E",
        secondary200:"#FEE6D1",
        secondary400:"#FFD4AC",
        secondary600:"#FFB877",
        secondary800:"#FF9F45",
        secondary900:"#FF8C20",
        personal200:"#96FE25",
        personal300:"#8BDE13",
        personal400:"#86CE0A",
        personal500:"#53B420",
        personal600:"#379B1B",
        personal700:"#188015"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }, // chỉ chạy 1 nửa vì ta nhân đôi nội dung
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        swim: {
          '0%': { transform: 'translateX(-100%) translateY(0)' },
          '25%': { transform: 'translateX(25vw) translateY(-20px)' },
          '50%': { transform: 'translateX(50vw) translateY(10px)' },
          '75%': { transform: 'translateX(75vw) translateY(-20px)' },
          '100%': { transform: 'translateX(100vw) translateY(0)' },
        },
      },
      animation: {
        swim: 'swim 10s linear infinite',
      },
      
    },
  },
  plugins: [],
}

