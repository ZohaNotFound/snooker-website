export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0B0907',
        primary: '#1B5C3C',
        accent: '#B8932E',
        cream: '#EAE4D9',
        light: '#F8F6F2',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],  // or use 'DM Sans'
      },
      height: {
        'screen-100': '100vh',
      },
    },
  },
  plugins: [],
}