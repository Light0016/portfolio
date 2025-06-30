/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: "#a855f7",
          blue: "#3b82f6",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          gradient: "#1e1b4b",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0a0a0a 10%, #1e1b4b 100%)",
      },
      boxShadow: {
        glass: "0 12px 40px rgba(31, 38, 135, 0.5)",
        neon: "0 0 25px rgba(168, 85, 247, 0.6)",
      },
      backdropBlur: {
        glass: "blur(18px)",
      },
    },
  },
  plugins: [],
};
