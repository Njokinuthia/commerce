/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      colors: {
        green: '#088178',
        blackish: '#000000',
        grey: '#F4F4F4',
       
        
      }
    },
  },
  plugins: [],
}
