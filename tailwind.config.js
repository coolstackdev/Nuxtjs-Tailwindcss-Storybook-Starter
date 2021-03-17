/* eslint-disable */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#090808',
      white: '#fff',
      gray: {
        light: '#F8F8F8',
        DEFAULT: '#F8F8F8',
        dark: '#868686'
      },
      blue: '#009EE3',
      yellow: '#FFED00',
      magenta: '#E5007D',
      mint: '#00ABAE'
    },
    fontFamily: {
      'cabin-bold': ['Cabin-Bold'],
      'cabin-bold-italic': ['Cabin-BoldItalic'],
      'cabin-medium': ['Cabin-Medium'],
      'cabin-regular': ['Cabin-Regular'],
    },
    fontSize: {
      'xs': '16px',
      'sm': '18px',
      'base': '20px',
      'lg': '24px',
      'xl': '26px',
      '2xl': '30px',
      '3xl': '32px',
      '4xl': '36px',
      '5xl': '40px',
      '6xl': '48px',
      '7xl': '68px'
    },
    lineHeight: {
      2: '26px',
      3: '28px',
      4: '32px',
      5: '34px',
      6: '38px',
      7: '46px',
      8: '48px',
      9: '56px',
      10: '86px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
