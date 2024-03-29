const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#424948',
      secondary: '#6b574e',
      accentCTA: '#7c7336',
      accent: '#59bd99',
      neutral: '#64748b',
      ...colors
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '250': '2.5',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      opacity: ['disabled'],
      borderWidth: ['hover', 'active']
    },
  },
  plugins: [],
}
