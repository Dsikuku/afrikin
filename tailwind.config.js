/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            brand: {
                primary: '#D9A443',   // Gold
                secondary: '#D99E6A', // Tan/Sand
                dark: '#8C2E0B',      // Terracotta/Rust
                light: '#A65A3F',     // Muted Copper
            },
        },
        animation: {
          'spin-slow': 'spin 8s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        // Adding extra spacing or border radius if you want to standardize those [2rem] corners
        borderRadius: {
          '4xl': '2rem',
          '5xl': '3rem',
        }
    },
  },
  plugins: [],
}