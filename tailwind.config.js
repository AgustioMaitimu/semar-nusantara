/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fancy: 'Italianno',
        upright: 'Aref Ruqaa Ink',
        classic: 'Gelasio',
      },
      backgroundImage: {
        headerImage: 'url("/src/assets/header.jpg")',
        storeImage: 'url("/src/assets/store2.jpg")',
        storeImage2: 'url("/src/assets/store3.png")',
      },
    },
  },
  plugins: [],
};

