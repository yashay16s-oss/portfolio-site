/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161F2B",       // deep blue-slate background, not pure black
        surface: "#1E2836",   // panel background
        line: "#2C384A",      // hairline borders
        paper: "#EDEAE2",     // warm off-white text
        muted: "#93A2B7",     // secondary text
        signal: "#E8A33D",    // amber accent — commit/build signal
        ok: "#5FB98C",        // muted green for "merged/shipped" states
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
