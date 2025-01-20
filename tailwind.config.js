/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        canela: ['"Canela-Regular-Trial"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
