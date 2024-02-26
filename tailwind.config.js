/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'app.{js,ts,vue}',
    'error.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

