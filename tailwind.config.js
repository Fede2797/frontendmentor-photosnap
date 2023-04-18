/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Gradient: bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF]
        'initial-grey': 'rgba(0, 0, 0, 0.0001)',
        'end-grey': 'rgba(0, 0, 0, 0.6612)',
        'light-grey': '#DFDFDF',
      },
      fontFamily: {
        'dm-sans': 'DM Sans',
      }
    },
  },
  plugins: [],
}

