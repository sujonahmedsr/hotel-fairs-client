/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primay: '#4D869C',
        back: '#EEF7FF',
      },
    },
  },
  plugins: [require('daisyui'),],
}