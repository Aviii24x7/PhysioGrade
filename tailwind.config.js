/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7C7B",
          hover: "#0F9E9D",
          dark: "#0A5C5B",
          tint: "#E6F4F4",
        },
        accent: {
          DEFAULT: "#38BDF8",
          dark: "#0284C7",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
          muted: "#64748B",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          tint: "#F0FDFC",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 8px 32px -12px rgba(14, 124, 123, 0.18)",
        card: "0 4px 20px -8px rgba(15, 23, 42, 0.08)",
        cta: "0 10px 24px -8px rgba(14, 124, 123, 0.45)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "scale-in": "scale-in 0.3s ease-out both",
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
  plugins: [],
};
