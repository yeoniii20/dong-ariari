import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        black: "#000",
        text1: "#000",
        subtext1: "#4B4F52",
        subtext2: "#7D8595",
        unselected: "#A1A6B0",
        icon: "#777F90",
        menuborder: "#E3E3E3",
        hover: "#F4F6FA",
        pressed: "#E8EBF1",
        searchbar: "#F2F4F6",
        searchbarborder: "#7495B6",
        primary_hover: "#4188EB",
        primary_pressed: "#4080DB",
        card_pressed: "#3569B7",
        pulldownmenutext: "#404040",
        primary: "#589BFF",
        sub1: "#93BEFF",
        sub2: "#8A84FE",
        point: "#D1F75D",
        button1: "#d4dbe5",
        button2: "#c6d4e8",
        button3: "#bfd1e8",
        button_border: "#889cd6",
      },
      boxShadow: {
        default: "2px 2px 12px 0px rgba(0, 0, 0, 0.12)",
      },
      fontSize: {
        h1_contents_title: [
          "24px",
          {
            fontWeight: 600,
          },
        ],
        h2: [
          "21px",
          {
            fontWeight: 600,
          },
        ],
        h3: [
          "18px",
          {
            fontWeight: 600,
          },
        ],
        h4: [
          "16px",
          {
            lineHeight: "150%",
          },
        ],
        h4_sb: [
          "16px",
          {
            fontWeight: 600,
            lineHeight: "18px",
          },
        ],
        body1_r: [
          "15px",
          {
            lineHeight: "150%",
          },
        ],
        body1_m: [
          "15px",
          {
            fontWeight: 500,
            lineHeight: "150%",
          },
        ],
        body1_sb: [
          "15px",
          {
            fontWeight: 600,
          },
        ],
        body2_m: ["14px", { fontWeight: 500, lineHeight: "150%" }],
        body3_m: ["13px", { fontWeight: 500, lineHeight: "150%" }],
        body4_r: ["12px", {}],
      },
    },
  },
  plugins: [],
};
export default config;
