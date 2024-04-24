/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  prefix: 'tw-',
  theme: {
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1920px',
    },
    extend: {
      colors: {
        primary: '#213547',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
}
