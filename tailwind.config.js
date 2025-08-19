/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mulberry-velvet': '#792339',
        'blushed-linen': '#FFECE2',
        'charcoal-mood': '#787878',
        'lavender-fog': '#D9C3DB',
      },
    },
  },
  plugins: [],
};
