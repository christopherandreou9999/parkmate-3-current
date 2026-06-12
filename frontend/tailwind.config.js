/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A5C',
        accent: '#2E75B6',
        background: '#F5F7FA',
        'text-dark': '#1B3A5C',
        border: '#E0E6F0',
        success: '#10B981',
      },
      borderRadius: {
        DEFAULT: '8px',
      },
    },
  },
  plugins: [],
}
