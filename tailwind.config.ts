import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F5F8FC",
          100: "#EEF2F7",
          200: "#D7DEE6",
          300: "#A6B3C2",
          400: "#5C6B7A",
          500: "#3A4D63",
          600: "#1F3A5F",
          700: "#162C49",
          800: "#0E1F33",
          900: "#08131F",
        },
        ink: {
          DEFAULT: "#1F2D3D",
          muted: "#5C6B7A",
          subtle: "#8995A3",
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['ui-serif', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1F2D3D",
            maxWidth: "70ch",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
