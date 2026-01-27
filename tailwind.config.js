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
        fontFamily: {
          // 'display' for big headings, 'sans' for body content
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['Montserrat', 'system-ui', 'sans-serif'],
        },
        letterSpacing: {
          tighter: '-0.05em', // For those punchy H1s
          widest: '0.25em',   // For the small all-caps labels
        },
        animation: {
          'spin-slow': 'spin 8s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '3rem',
        }
    },
  },
  plugins: [],
}