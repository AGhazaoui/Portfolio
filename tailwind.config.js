/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primaryLight: '#86a6df',
      primary: '#5068a9',
      primaryDark: '#0f172a',
      snow: '#f8f8f8',
      neutral: '#3e4a61'
    },
    fontFamily: {
      customFont: ['"Custom Font"', "sans-serif"]
    },
    extend: {}
  },
  plugins: []
}
