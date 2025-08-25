/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F08C00',
        'secondary': '#EC2A80',
        'third': '#FFC71A',
        'fourth': '#FFF9E8',
        'fifth': '#1E1E1E',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        head: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

