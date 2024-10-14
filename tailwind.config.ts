import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   pretendard: [''],
      // },
      colors: {
        background: "#fff",
        text1: "#000",
        subtext1: "#4B4F52",
        subtext2: "#7D8595",
        unselected: "#A1A6B0",
        icon: "#777F90",
        menuborder: "#E3E3E3",
        hover: "#F4F6FA",
        pressed: "#E8EBF1",
        searchbar: "#F2F4F6",
        searchbarborder: "#406CAC",
        primary_hover: "#4188EB",
        primary_pressed: "#4080DB",
        pulldownmenutext: "#404040",
        primary: "#589BFF",
        sub1: "#93BEFF",
        sub2: "#8A84FE",
        point: "#D1F75D",
      },
    },
  },
  plugins: [],
};
export default config;
