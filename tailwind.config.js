/** @type {import('tailwindcss').Config} */

import tailwindForms from '@tailwindcss/forms';
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      tailwindForms
  ],
}

