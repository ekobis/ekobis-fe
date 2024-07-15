/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0d9488', // Tailwind yeşil tonu
        'secondary': '#0ea5e9', // Tailwind mavi tonu
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

