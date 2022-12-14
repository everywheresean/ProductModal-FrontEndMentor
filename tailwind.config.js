/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans'],
      'serif': ['Fraunces', 'sans-serif'],
    },
    extend: {
      colors: {
        veryDarkBlue: 'hsl(212, 21%, 14%)',
        darkGrayishBlue: 'hsl(228,12%, 48%)',
        cream: 'hsl(30, 38%, 92%)',
        darkCyan: 'hsl(158, 36%, 37%)',
      },
    },
  },
  plugins: [],
}
