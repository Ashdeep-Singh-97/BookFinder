/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#D9C9B7',
          200: '#C6B09A',
          300: '#B39A7D',
          400: '#9F7D5B',
          500: '#8C5F3C',
          600: '#7B4D2B',
          700: '#6A3B1B',
          800: '#582A0C',
          900: '#4B1C00',
        },
      },
    },
  },
  plugins: [],
}