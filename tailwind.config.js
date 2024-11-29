/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'dots-pattern': "radial-gradient(circle, #b8996e 4px, transparent 1px)", },
      backgroundSize: { 'dots-size': '60px 60px', },
      fontFamily: {
        //sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        archivomoto: ["Archivomoto"],
      },
      backgroundImageHole: { 'mask-pattern': "url('/img/984875372ef02d7846df8731cc7095cb.gif')", },
      maskImage: {
        'mask-pattern': "url('/img/984875372ef02d7846df8731cc7095cb.gif')",
      },
      maskSize: { 'cover': 'cover', },
      colors: {
          "first-theme": '#b8996e',
        black: {
        },
        light: {
        },
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

