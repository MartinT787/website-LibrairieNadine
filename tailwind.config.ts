import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          burgundy: "#602525", // Dark red/burgundy from the logo/buttons
          blue: "#0062CC",     // Bright blue from the rings
          light: "#F7F5F0",    // Soft paper-like background
        },
        primary: {
          DEFAULT: "#602525",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F7F5F0",
          foreground: "#602525",
        },
      },
    },
  },
  plugins: [],
};
export default config;
