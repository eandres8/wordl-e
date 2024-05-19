/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
      'black': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
      },

      'ebony': {
        '50': '#f5f6fa',
        '100': '#ebedf3',
        '200': '#d2d7e5',
        '300': '#abb6ce',
        '400': '#7d8eb3',
        '500': '#5d709a',
        '600': '#495880',
        '700': '#3c4868',
        '800': '#343e58',
        '900': '#2f374b',
        '950': '#262b3c',
      },
    
      'gray':{
        '50': '#fafafa',
        '100': '#f4f4f5',
        '200': '#e4e4e7',
        '300': '#d4d4d8',
        '400': '#a1a1aa',
        '500': '#71717a',
        '600': '#52525b',
        '700': '#3f3f46',
        '800': '#27272a',
        '900': '#18181b'
      },

      'yellow':{
        '50': '#fefce8',
        '100': '#fef9c3',
        '200': '#fef08a',
        '300': '#fde047',
        '400': '#facc15',
        '500': '#eab308',
        '600': '#ca8a04',
        '700': '#a16207',
        '800': '#854d0e',
        '900': '#713f12'
      }
    }
  },
  plugins: [],
}
