const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
    theme: {
        fontFamily: {
            'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],

            'serif': ['Roboto', ...defaultTheme.fontFamily.serif],

            'mono': [ ...defaultTheme.fontFamily.mono],

        }
    }
}
