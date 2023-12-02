/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { primary: ["Roboto", "sans-serif"] },
      fontSize: {
        heding1Black: ["30px", "46px"],
        heading2Bold: ["26px", "40px"],
        heading3Bold: ["18px", "28px"],
        displayBold: ["16px", "24px"],
        displayMedium: ["16px", "24px"],
        bodyBold: ["14px", "22px"],
        bodyMedium: ["13px", "18px"],
        bodyRegular: ["12px", "18px"],
      },
      colors: {
        blueColors: "#377DFF",
        greenColors: "#38CB89",
        yellowColors: "#FFAB00",
        redColors: "#FF5630",
        darkColors1: "#191C21",
        darkColors2: "#212833",
      },
    },
  },
  plugins: [],
});
