import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#fdfaf5",
        foreground: "#2b2117",
        card: "#f3e3cf",
        cardMuted: "#e0c7a4",
        accent: "#b47b44",
        accentDark: "#8c5c2e"
      },
      boxShadow: {
        soft: "0 14px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
