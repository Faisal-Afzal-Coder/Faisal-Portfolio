import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d9f1ff",
          200: "#bce7ff",
          300: "#8ed8ff",
          400: "#59c0ff",
          500: "#33a1ff",
          600: "#1a82f5",
          700: "#146be1",
          800: "#1756b6",
          900: "#194a8f",
          950: "#142e57",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(51, 161, 255, 0.25), transparent)",
        "mesh-light":
          "radial-gradient(at 40% 20%, rgba(51, 161, 255, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(51, 161, 255, 0.08) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(51, 161, 255, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(51, 161, 255, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.08)",
        "glass-dark": "0 8px 32px rgba(0, 0, 0, 0.35)",
        glow: "0 0 40px rgba(51, 161, 255, 0.25)",
        "glow-accent": "0 0 40px rgba(139, 92, 246, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
