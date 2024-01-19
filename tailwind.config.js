/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
      },
      colors: {
        gray: '#F5F5F8',
        'gray-light': '#E9E8ED',
        'gray-field': '#EFEFF4',
        dark: '#D4D4D7',
        black: {
          10: '#2B2B31',
          6: '#2B2B31A8',
          5: '#2B2B3180',
          3: '#2B2B314D',
          1: '#2B2B311A',
        },
        blue: '#366BAB',
        'blue-light': '#E9F7FF',
        'blue-dark': '#25469A',
        green: '#329063',
        yellow: '#D08B24',
        red: '#BE2C61',
      },
      boxShadow: {
        card: '0px 2px 20px rgba(82, 154, 242, 0.5), 0px 0px 4px rgba(82, 154, 242, 0.3)',
        search: '0px 2px 20px rgba(82, 154, 242, 0.5), 0px 0px 4px rgba(82, 154, 242, 0.3)',
        nav: '0px -2px 8px rgba(43, 43, 49, 0.1)',
        input: '0px 2px 8px rgba(82, 154, 242, 0.3), 0px 0px 4px rgba(82, 154, 242, 0.1)',
      },
      dropShadow: {
        modal: '0px -2px 8px rgba(43, 43, 49, 0.1)',
      },
      padding: {
        15: '60px',
      },
      margin: {
        15: '60px',
      },
    },
  },
  plugins: [],
};
