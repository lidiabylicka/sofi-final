/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: 'rgba(var(--darkblue))',
        linksdetails: 'rgba(var(--linksdetails))',
        aqua: 'rgba(var(--aqua))',
        liteblue: '#81FFC4',
        vanilla: '#EBE3AE',
        red: '#8B0000',
        brown: '#372126',
      },
      backgroundImage: {
        main: 'linear-gradient(to bottom, var(--main-gradient-start), var(--main-gradient-end))',
        card: 'linear-gradient(to bottom, var(--card-gradient-start), var(--card-gradient-end))',
        button: 'linear-gradient(to top, #103b37, #81FFC4)',
      },
      backgroundColor: {
        fixed: 'fixed',
        disabled: 'disabled',
      },
      screens: {
        extraSmall: { max: '399px' },

        mobile: { min: '400px', max: '720px' },

        tablet: { min: '768px', max: '1023px' },

        laptop: { min: '1024px', max: '1279px' },

        desktop: '1280px',
      },
      maxHeight: {
        'card-container': '500px',
        'poke-img': '300px',
      },
      width: {
        'card-container': '400px',
      },
    },
  },

  plugins: [],
};
