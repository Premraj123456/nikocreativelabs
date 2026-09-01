import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0C",
        paper: "#FCFCF9",
        line: "#E8E6E1",
        brass: "#C8A45C",
        muted: "#6B6B70",
        faint: "#9A9AA0",
        surface: "#F5F1E9",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
