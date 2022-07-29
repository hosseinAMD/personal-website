// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.orange,
        danger: colors.pink
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: colors.orange[600] }
        }
      },
      animation: {
        typewriter: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite'
      }
    }
  },
  plugins: []
};
