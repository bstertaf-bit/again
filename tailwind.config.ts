import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6fff9",
          100: "#e7ffef",
          500: "#17b26a",
          700: "#067647"
        },
        sunset: "#ff8b37",
        gold: "#ffcd5c"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(23,178,106,0.18), rgba(255,139,55,0.24), rgba(255,205,92,0.18))"
      },
      boxShadow: {
        glass: "0 8px 30px rgba(0,0,0,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
