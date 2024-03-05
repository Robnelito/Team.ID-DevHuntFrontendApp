/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: '#1166FB18',
        secondary: '#0081FD6B'
      }
    },
  },
  plugins: [],
}

