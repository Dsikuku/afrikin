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
                primary: "#D9A443",
                secondary: "#D99E6A",
                dark: "#8C2E0B",
                light: "#A65A3F",
            },
        },
    },
  },
  plugins: [],
}