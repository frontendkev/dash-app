/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        quicksandBold: ['quicksandBold', 'san-serif'],
        quicksandSemiBold: ['quicksandSemiBold', 'san-serif'],
        quicksandRegular: ['quicksandRegular', 'san-serif'],
      },
      boxShadow: {
        'ghost': ' -0.1em -0.1em 0.1em rgb(100, 100, 100, 0.3)',
        'light': '0em -0em 0.3em 0.2em rgb(100, 100, 100, 0.3)',
        'dark': '0em -0em 0.3em 0.2em rgb(100, 100, 100, 0.8)',
        'rose': '0em -0em 10px 1px rgb(200, 200, 200, 0.8)',
      },
      backgroundColor: {
        'mygray': '#11141b'
      }
    },
  },
  plugins: [],
}
