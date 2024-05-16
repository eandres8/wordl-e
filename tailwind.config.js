/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'fern': {
        '50': '#f5f9f4',
        '100': '#e6f3e5',
        '200': '#cfe6cc',
        '300': '#a8d1a4',
        '400': '#6aaa64',
        '500': '#579651',
        '600': '#447a3f',
        '700': '#376134',
        '800': '#304e2d',
        '900': '#274126',
        '950': '#122211',
      },
      "white": "#FFFFFF",
      "black": "#000000",
    }
  },
  plugins: [],
}

