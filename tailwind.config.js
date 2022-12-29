/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./*.html'],
  theme: {
    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Sevillana', 'sans-serif'],
        serif: ['Rubik', 'Georgia'],
      },
    },
  },
  plugins: [],
};
