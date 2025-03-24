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
      },
      keyframes: {
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