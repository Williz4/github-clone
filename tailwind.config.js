/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'OpenSans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        "githubNav": "#161B22",
        "githubBody": "#0D1117",
      }
    },
  },
  plugins: [],
}
