/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  // presets: [
  //   require('./my-preset.js')
  // ],
  theme: {
    colors: {
        transparent: 'transparent',
        green: {
          DEFAULT: '#009e48',
        },
        yellow: {
          DEFAULT: '#ffd900',
        },
        white: {
          DEFAULT: '#fff'
        },
        black:{
          DEFAULT: '#000000',
        },
        bgcolor: {
          DEFAULT: '#f5f5f5',
        },
        lightgray: {
          DEFAULT: '#dedede',
        },
        graycolor: {
          DEFAULT: '#949494',
        },
        darkgray: {
          DEFAULT: '#5f5f5f',
        }
      },
    extend: {

        colors: {
            transparent: 'transparent',
            green: {
              DEFAULT: '#009e48',
            },
            yellow: {
              DEFAULT: '#ffd900',
            },
            white: {
              DEFAULT: '#fff'
            },
            black:{
              DEFAULT: '#000000',
            },
            bgcolor: {
              DEFAULT: '#f5f5f5',
            },
            lightgray: {
              DEFAULT: '#dedede',
            },
            graycolor: {
              DEFAULT: '#949494',
            },
            darkgray: {
              DEFAULT: '#5f5f5f',
            }
          }
    },
    screens: {
      'sm': '750px',
      'md': '950px',
      'lg': '1020px',
    },
  },
  plugins: [],
}

