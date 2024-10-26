/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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

