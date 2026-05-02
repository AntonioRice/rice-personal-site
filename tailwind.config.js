/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "360px" },
        sm: { max: "640px" },
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        print: { raw: "print" },
        "motion-safe": { raw: "(prefers-reduced-motion: no-preference)" },
        "motion-reduce": { raw: "(prefers-reduced-motion: reduce)" },
      },
      colors: {
        canvas: "var(--bg)",
        card: "var(--bg-soft)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        rule: "var(--border)",
        "rule-strong": "var(--border-strong)",
        fg: "var(--text)",
        dim: "var(--text-dim)",
        muted: "var(--muted)",
        faint: "var(--muted-2)",
        accent: "var(--accent)",
        "accent-line": "var(--accent-line)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};
