import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f5ff",
          100: "#dbe4ff",
          200: "#b2c5ff",
          300: "#89a5ff",
          400: "#6588ff",
          500: "#3d67ff",
          600: "#2a4fd6",
          700: "#1b39a6",
          800: "#112478",
          900: "#0a154d"
        },
        accent: "#f97316"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px -15px rgba(68, 88, 221, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
