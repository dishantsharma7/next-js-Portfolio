/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#e0e0e0",
        card: "#12121a",
        muted: "#1c1c2e",
        "muted-foreground": "#6b7280",
        accent: "#00ff88",
        "accent-secondary": "#ff00ff",
        "accent-tertiary": "#00d4ff",
        "border-cyber": "#2a2a3a",
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        share: ['var(--font-share)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
