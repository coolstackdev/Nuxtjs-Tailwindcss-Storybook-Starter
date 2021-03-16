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
    extend: {
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
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
