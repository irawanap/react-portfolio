/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-text': 'gradient-text 5s ease infinite',
        shine: 'shine 5s linear infinite',
      },
      keyframes: {
        shine: {
        '0%': { 'background-position': '100%' },
        '100%': { 'background-position': '-100%' },
        },
        'gradient-text': {
          '0%, 100%': {
            'background-position': '0% 70%',
          },
          '50%': {
            'background-position': '100% 70%',
          },
        },
      },
    },
  },
  plugins: [],
};