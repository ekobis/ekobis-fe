/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        extralight: 200,
        medium: 500,
      },
      animation: {
        rotate360: 'rotate360 1s linear infinite',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        customGreen: 'rgb(119, 228, 200)',
        customCyan: 'rgb(54, 194, 206)',
        customBlue: 'rgb(71, 140, 207)',
        customPurple: 'rgb(69, 53, 193)',
        nightBorder: '#444',
        dayBorder: '#ddd',
      },
      boxShadow: {
        nightShadow: '0 4px 6px rgba(35, 130, 221, 0.66)',
        dayShadow: '0 4px 6px rgba(7, 170, 241, 0.66)',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
