/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['10px', '14px'],
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        slide: {
          "0%": { opacity: 0, transform: "translateX(0) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateX(0) scale(1)" }
        },
      },
      animation: {
        fade: 'fade 1s ease-in-out',
        slide: 'slide 1s ease-out',
      }
    },
  },
  plugins: [],
}