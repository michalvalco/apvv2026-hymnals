/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      /* ── Tradition colours ── */
      colors: {
        lutheran: {
          DEFAULT: "#D4A843",
          light: "#E8C872",
          dark: "#A68230",
          50: "#FCF6E8",
          100: "#F5E6C0",
          200: "#EDD498",
          300: "#E8C872",
          400: "#D4A843",
          500: "#A68230",
          600: "#7D6224",
          700: "#544218",
          800: "#2B210C",
          900: "#161106",
        },
        utraquist: {
          DEFAULT: "#8B2332",
          light: "#B5344A",
          dark: "#6A1A26",
          50: "#FBE8EB",
          100: "#F0BFC7",
          200: "#D67080",
          300: "#B5344A",
          400: "#8B2332",
          500: "#6A1A26",
          600: "#53141E",
          700: "#3C0E15",
          800: "#25090D",
          900: "#130407",
        },
        unity: {
          DEFAULT: "#2E8B8B",
          light: "#3CB4B4",
          dark: "#226969",
          50: "#E8F6F6",
          100: "#BFE6E6",
          200: "#73C9C9",
          300: "#3CB4B4",
          400: "#2E8B8B",
          500: "#226969",
          600: "#1A5151",
          700: "#133A3A",
          800: "#0B2323",
          900: "#061212",
        },

        /* ── Base palette (parchment + dark) ── */
        parchment: {
          DEFAULT: "#F5F0E8",
          50: "#FDFCFA",
          100: "#FAF7F2",
          200: "#F5F0E8",
          300: "#E8DFD0",
          400: "#D4C7B0",
          500: "#B8A88A",
          600: "#9C8A6C",
          700: "#7A6B54",
          800: "#584D3D",
          900: "#372F26",
        },
        ink: {
          DEFAULT: "#1A1611",
          50: "#F0EEEB",
          100: "#D4D0CA",
          200: "#A8A196",
          300: "#7C7367",
          400: "#504A3F",
          500: "#37322A",
          600: "#2A261F",
          700: "#1E1B16",
          800: "#1A1611",
          900: "#0D0B09",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E4CC7A",
          dark: "#96792E",
          accent: "#FFD700",
        },
        burgundy: {
          DEFAULT: "#722F37",
          light: "#964050",
          dark: "#501F25",
        },

        /* ── Epistemic status colours ── */
        epistemic: {
          factual: "#4A9C6E",
          interpretive: "#C4923E",
          deferred: "#8B7EB8",
        },
      },

      /* ── Typography ── */
      fontFamily: {
        serif: [
          "Crimson Pro",
          "Crimson Text",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Cinzel", "Crimson Pro", "serif"],
      },

      fontSize: {
        "hero-title": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "hero-subtitle": [
          "1.5rem",
          { lineHeight: "1.4", letterSpacing: "0.01em" },
        ],
        "section-title": [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
      },

      /* ── Spacing & layout ── */
      maxWidth: {
        prose: "72ch",
        content: "1200px",
        wide: "1440px",
      },

      /* ── Borders & decorative ── */
      borderWidth: {
        ornament: "2px",
      },

      /* ── Opacity for epistemic status ── */
      opacity: {
        factual: "1",
        interpretive: "0.8",
        deferred: "0.6",
      },

      /* ── Animation ── */
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
