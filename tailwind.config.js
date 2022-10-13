module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./layouts/**/*.js"],
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      },
      colors: {
        main: '#4e0057ee',
        main2: '#4e0057',
        light: '#F3F4F9',
      },
      spacing: {
        sidebar: 250,
        'sidebar-mini': 65,
      }
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}