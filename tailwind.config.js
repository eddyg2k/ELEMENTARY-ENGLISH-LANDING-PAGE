/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './app/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './function/**/*.{ts,tsx}',
    './colors/**/*.{ts,tsx}',
    './backgrounds/**/*.{ts,tsx}',
    './fonts/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
