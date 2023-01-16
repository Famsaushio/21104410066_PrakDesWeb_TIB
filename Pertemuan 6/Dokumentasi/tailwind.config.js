/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        skcolor: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
    },
  },
  
  varians: {
    extend: {
      display: ['group-hover'],
      borderWidth: ['group-hover']

    },
  },
  plugins: [],
}