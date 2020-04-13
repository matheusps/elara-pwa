const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [tailwindcss('./src/styles/config.js'), require('autoprefixer')],
}
