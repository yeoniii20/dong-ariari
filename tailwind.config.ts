import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        background: "#fff",
        sub_bg: "rgba(242, 244, 246, 0.75)",
        white70: "rgba(255, 255, 255, 0.70)",
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
        pulldownmenutext: "#404040",
        primary: "#589BFF",
        sub1: "#93BEFF",
        sub2: "#8A84FE",
        point: "#D1F75D",
        button1: "#d4dbe5",
        button2: "#c6d4e8",
        button3: "#bfd1e8",
        button_border: "#889cd6",
        black_50: "rgba(0, 0, 0, 0.5)",
        token_bg: "rgba(166, 166, 166, 0.2)",
        selectedoption_default: "rgba(88, 155, 255, 0.1)",
        selectedoption_hover: "rgba(88, 155, 255, 0.2)",
        selectedoption_pressed: "rgba(88, 155, 255, 0.26)",
      },
      boxShadow: {
        default: "2px 2px 12px 0px rgba(0, 0, 0, 0.12)",
        border: "0px -3px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      screens: {
        sm: "360px",
        sm_md: "668px",
        md: "768px",
        lg: "1024px",
        lx: "1288px",
      },
      borderRadius: {
        28: "28px",
        30: "30px",
        48: "48px",
        56: "56px",
        60: "60px",
      },
      fontSize: {
        28: "28px",
        19: "19px",
        15: "15px",
        13: "13px",
        10: "10px",
        h1_contents_title: ["24px", { fontWeight: 600 }],
        h2: ["21px", { fontWeight: 600 }],
        h3: ["18px", { fontWeight: 600, lineHeight: "27px" }],
        h4: ["16px", { fontWeight: 500, lineHeight: "24px" }],
        h4_r: ["16px", { fontWeight: 400, lineHeight: "24px" }],
        h4_sb: ["16px", { fontWeight: 600, lineHeight: "24px" }],
        body1_r: ["15px", { fontWeight: 400, lineHeight: "150%" }],
        body1_m: ["15px", { fontWeight: 500, lineHeight: "22.5px" }],
        body1_sb: ["14px", { fontWeight: 600, lineHeight: "21px" }],
        body2_m: ["14px", { fontWeight: 500, lineHeight: "21px" }],
        body3_r: ["12px", { fontWeight: 400, lineHeight: "18px" }],
        body3_m: ["13px", { fontWeight: 500, lineHeight: "19.5px" }],
        body4_r: ["11px", { fontWeight: 400 }],
        mobile_h1_contents_title: ["18px", { fontWeight: 600 }],
        mobile_h1_sb: ["14px", { fontWeight: 600, lineHeight: "21px" }],
        mobile_h2: ["17px", { fontWeight: 600 }],
        mobile_h3: ["16px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_h4: ["15px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_h4_r: ["15px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_h4_sb: ["15px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body1_r: ["14px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_body1_m: ["14px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_body1_sb: ["14px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body2_r: ["13px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_body2_m: ["13px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_body2_sb: ["13px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body3_r: ["12px", { fontWeight: 400, lineHeight: "150%" }],
        mobile_body3_m: ["12px", { fontWeight: 500, lineHeight: "150%" }],
        mobile_body3_sb: ["12px", { fontWeight: 600, lineHeight: "150%" }],
        mobile_body4_r: ["11px", { fontWeight: 500, lineHeight: "150%" }],
      },
    },
  },
  plugins: [
    function (pluginAPI: PluginAPI) {
      pluginAPI.addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
export default config;
