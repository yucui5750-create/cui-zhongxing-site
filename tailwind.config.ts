import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        graphite: "#1D1D1F",
        mist: "#F5F7FA",
        silver: "#D8DEE8",
        ice: "#EAF4FF",
        azure: "#6EA8FE"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(110, 168, 254, 0.22)",
        soft: "0 18px 60px rgba(15, 23, 42, 0.08)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 12%, rgba(234, 244, 255, 0.95) 0%, rgba(255, 255, 255, 0.72) 32%, rgba(255, 255, 255, 1) 70%)"
      }
    }
  },
  plugins: []
};

export default config;
