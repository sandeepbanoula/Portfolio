/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        pushDown: {
          '0% 100%': { top: '-6rem' },
          '50%': { top: '-4rem' }
        },
        sway: {
          '0%, 100%': { transform: "translateX(-10%)" },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        sway: 'sway 1.5s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
