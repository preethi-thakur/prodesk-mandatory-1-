/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        16: '16px',
        32: '32px',
        48: '48px',
        64: '64px',
        96: '96px',
        128: '128px',
      }
    },
  },
  plugins: [],
}
