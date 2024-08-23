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
    },
  },
  plugins: [],
};
