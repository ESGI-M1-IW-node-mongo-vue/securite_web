/** @type {import('tailwindcss').Config} */

import tailwindForms from '@tailwindcss/forms';
import tailwindColors from 'tailwindcss/colors';

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
    colors: {
    ...tailwindColors,
      blue: {
        600: "#189CF1"
      }
    }
  },
  plugins: [
      tailwindForms
  ],
}

