import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#065f46"
        },
        moss: {
          DEFAULT: "#043828",
          light: "#e6f9ef"
        },
        mint: {
          DEFAULT: "#34d399"
        }
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"]
      },
      boxShadow: {
        glow: "0 10px 40px -15px rgba(52, 211, 153, 0.45)"
      }
    }
  },
  plugins: [animatePlugin]
};

export default config;
