// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#e6f1fe',
//           100: '#cce3fd',
//           200: '#99c7fb',
//           300: '#66aaf9',
//           400: '#338ef7',
//           500: '#0072f5',
//           600: '#005bc4',
//           700: '#004493',
//           800: '#002e62',
//           900: '#001731',
//           950: '#0a192f',
//         },
//         accent: {
//           50: '#e6fffa',
//           100: '#ccfff5',
//           200: '#99ffeb',
//           300: '#66ffe0',
//           400: '#33ffd6',
//           500: '#00ffcc',
//           600: '#00cca3',
//           700: '#00997a',
//           800: '#006652',
//           900: '#003329',
//           DEFAULT: '#64ffda',
//         },
//       },
//     },
//     fontFamily: {
//       sans: [
//         'Inter',
//         'ui-sans-serif',
//         'system-ui',
//         '-apple-system',
//         'BlinkMacSystemFont',
//         'Segoe UI',
//         'Roboto',
//         'Helvetica Neue',
//         'Arial',
//         'sans-serif',
//       ],
//     },
//     spacing: {
//       '128': '32rem',
//       0: '0px',
//       1: '0.25rem',
//       2: '0.5rem',
//       3: '0.75rem',
//       4: '1rem',
//       5: '1.25rem',
//       6: '1.5rem',
//       7: '1.75rem',
//       8: '2rem',
//       12: '3rem',
//       16: '4rem',
//       20: '5rem',
//       28 : '7rem',
//       96: '24rem',
//     },
//     height: {
//       16: '4rem',
//       64: '16rem',
//       80: '20rem'
//     },
//     width:{
//     },
//     animation: {
//       'fade-in': 'fadeIn 0.5s ease-in-out',
//       'slide-up': 'slideUp 0.5s ease-in-out',
//       'slide-down': 'slideDown 0.5s ease-in-out',
//     },
//     keyframes: {
//       fadeIn: {
//         '0%': { opacity: '0' },
//         '100%': { opacity: '1' },
//       },
//       slideUp: {
//         '0%': { transform: 'translateY(20px)', opacity: '0' },
//         '100%': { transform: 'translateY(0)', opacity: '1' },
//       },
//       slideDown: {
//         '0%': { transform: 'translateY(-20px)', opacity: '0' },
//         '100%': { transform: 'translateY(0)', opacity: '1' },
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66aaf9',
          400: '#338ef7',
          500: '#0072f5',
          600: '#005bc4',
          700: '#004493',
          800: '#002e62',
          900: '#001731',
          950: '#0a192f',
        },
        accent: {
           50: '#e6fffa',
          100: '#ccfff5',
          200: '#99ffeb',
          300: '#66ffe0',
          400: '#33ffd6',
          500: '#00ffcc',
          600: '#00cca3',
          700: '#00997a',
          800: '#006652',
          900: '#003329',
          DEFAULT: '#64ffda',
         },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        128: '32rem',
        28: '7rem',
      },
      height: {
        64: '16rem',
        80: '20rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
