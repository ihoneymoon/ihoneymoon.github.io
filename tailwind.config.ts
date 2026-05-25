import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kawaii Pink Palette
        sakura: {
          50: "#FFF0F5",
          100: "#FFD6E7",
          200: "#FFB3D1",
          300: "#FF85B3",
          400: "#FF5C95",
          500: "#FF2D78",
          600: "#E0005A",
          700: "#B80049",
        },
        blush: {
          50: "#FFF5F7",
          100: "#FFE0E8",
          200: "#FFC0D0",
          300: "#FF99B5",
          400: "#FF6B8E",
          500: "#FF4D75",
        },
        lavender: {
          50: "#F5F0FF",
          100: "#EDE0FF",
          200: "#D8C0FF",
          300: "#C09AFF",
          400: "#A876FF",
          500: "#9055FF",
          600: "#7A38E0",
        },
        rose: {
          50: "#FFF0F3",
          100: "#FFD6DE",
          200: "#FFB3C1",
          300: "#FF8A9E",
          400: "#FF6080",
          500: "#FF3366",
        },
        petal: {
          50: "#FFFBFD",
          100: "#FFF0F8",
          200: "#FFD6EE",
          300: "#FFB3DE",
          400: "#FF85C8",
          500: "#FF5AB3",
        },
        dreamy: {
          pink: "#FFB7C5",
          lavender: "#C4B5FD",
          rose: "#FDA4AF",
          peach: "#FDBA74",
          mint: "#6EE7B7",
          sky: "#93C5FD",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        cute: ["'Nunito'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-kawaii":
          "linear-gradient(135deg, #FFB7C5 0%, #E879A0 30%, #C084FC 60%, #818CF8 100%)",
        "gradient-soft":
          "linear-gradient(135deg, #FFF0F5 0%, #FFD6E7 50%, #EDE0FF 100%)",
        "gradient-dreamy":
          "linear-gradient(135deg, #FF85B3 0%, #C09AFF 50%, #93C5FD 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #FFB6C1 0%, #FFD6E7 25%, #E6D5FF 50%, #D8C0FF 75%, #C4B5FD 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(255,183,197,0.15) 0%, rgba(196,181,253,0.15) 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        kawaii:
          "0 8px 32px rgba(255, 105, 180, 0.25), 0 2px 8px rgba(255, 105, 180, 0.15)",
        "kawaii-lg":
          "0 20px 60px rgba(255, 105, 180, 0.3), 0 8px 24px rgba(255, 105, 180, 0.2)",
        glow: "0 0 20px rgba(255, 105, 180, 0.4), 0 0 40px rgba(255, 105, 180, 0.2)",
        "glow-purple":
          "0 0 20px rgba(192, 154, 255, 0.4), 0 0 40px rgba(192, 154, 255, 0.2)",
        "glow-rose":
          "0 0 20px rgba(255, 133, 178, 0.4), 0 0 40px rgba(255, 133, 178, 0.2)",
        glass:
          "0 8px 32px rgba(255, 183, 197, 0.2), inset 0 1px 0 rgba(255,255,255,0.5)",
        "card-hover":
          "0 20px 60px rgba(255, 105, 180, 0.35), 0 8px 24px rgba(192, 154, 255, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        pulse_soft: "pulseSoft 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-x": "gradientX 6s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        typewriter: "typewriter 3s steps(40) 1s forwards",
        "border-dance": "borderDance 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: "0.5", transform: "scale(1.2) rotate(180deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.7)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 105, 180, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 105, 180, 0.8)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        borderDance: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
