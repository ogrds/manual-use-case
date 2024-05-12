import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TT Norms", "sans-serif"],
      },
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        "background-footer":
          "rgb(var(--background-footer-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted-rgb) / <alpha-value>)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgb(var(--background-footer-rgb) / 0.8), rgb(var(--background-rgb) / 0.8)), url('/images/banner.jpeg')",
        banner: "url('/images/banner.jpeg')",
      },
    },
  },
  plugins: [],
};

export default config;
