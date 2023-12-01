

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary': "rgb(16,15,15)",
        'secondary': 'rgb(30,31,37)',
        'sidebarItem': 'rgb(24,25,29)'

      },
    },
  },
  plugins: [],
}