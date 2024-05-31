/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        // Add colors
        colors: {
          primary: '#ADD8E6'
        }
        // Add font families
      },
    },
    plugins: [],
  }


