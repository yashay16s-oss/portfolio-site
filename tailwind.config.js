/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FAF9F6",       // warm off-white page background
        surface: "#FFFFFF",   // card background
        line: "#E8E5DD",      // hairline borders
        paper: "#1C1F26",     // near-black primary text
        muted: "#6B7280",     // secondary text
        signal: "#B5762E",    // refined gold accent
        ok: "#3F8F5F",        // muted green for "live" status
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
