/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "cc-midnight-blue": "#111729",
        "cc-midnight-purple": "#1D1B48",
        "cc-vibrant-blue": "#3662E3",
        "cc-midnight-navy": "#20293A",
        "cc-midnight-slate": "#364153",
        "cc-midnight-gray": "#4A5567",
        "cc-misty-gray": "#CDD5E0",
        "cc-misty-gray-200": "#97A3B6"
      },
      fontSize: {
        "cs-100": "12px",
        "cs-200": "16px",
        "cs-300": "20px",
        "cs-400": "32px"
      }
    },
  },
  corePlugins: {
    fontFamily: false
  },
  plugins: [],
}

