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
        maleBatik: 'url("/src/assets/maleBatik.jpg")',
        femaleBatik: 'url("/src/assets/femaleBatik.jpg")',
        blouse: 'url("/src/assets/batik-blouse.jpg")',
        dress: 'url("/src/assets/batik-dress.jpg")',
        pants: 'url("/src/assets/batik-pants.jpg")',
        robe: 'url("/src/assets/batik-robe.jpg")',
        shirt: 'url("/src/assets/batik-shirt.jpg")',
        outer: 'url("/src/assets/batik-outer.jpg")',
        suit: 'url("/src/assets/batik-suit.jpg")',
        ties: 'url("/src/assets/batik-ties.jpg")',
      },
    },
  },
  plugins: [],
};

