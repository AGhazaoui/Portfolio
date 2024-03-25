/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1380px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    colors: {
      primaryLight: '#86a6df',
      primaryLighter: '#BFCBE4',
      primary: '#15A5FF',
      primaryDark: '#0f172a',
      snow: '#f8f8f8',
      neutral: '#B8B8B8',
      neutralLight: '#E0E1E7',
      neutralDark: '#3A444A',
      black: '#050505',
    },
    fontFamily: {
      sans: ['Afacad', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
