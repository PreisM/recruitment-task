module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': {
          500: '#459671'
        },
        'custom-gray': {
          100: '#F8F9FA',
          200: '#F6F7F9',
          300: '#AEB5BC',
          400: '#6D747C',
          500: '#4A4F56',
          700: '#4C535A'
        }
      }
    }
  }
}
