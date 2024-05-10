/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "midnight-blue": "#111729",
        "midnight-purple": "#1D1B48",
        "vibrant-blue": "#3662E3",
        "midnight-navy": "#20293A",
        "midnight-slate": "#364153",
        "midnight-gray": "#4A5567",
        "misty-gray": "#CDD5E0"
      }
    },
  },
  plugins: [],
}

