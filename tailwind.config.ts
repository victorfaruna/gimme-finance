import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-main": "rgba(var(--color-main))",
        "color-1": "rgba(var(--color-1))",
        "color-3": "rgba(var(--color-3))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        playfair: ["var(--font-playfair)"],
        radhiumz: ["var(--font-radhiumz)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
