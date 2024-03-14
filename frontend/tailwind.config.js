/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        colorc1: '#14BDEB',
        colorhc1: '#1da9cf',
        colorc2: '#1da9cf',
        colorc3: '#99E1D9',
        colorc4: '#5D576B',
        colorborder: '#eceff1',
        alertsucces: '#31c48d',
        alerterror: '#d64937'
      }
    }
  },
  plugins: [],
}
/** COLORES: https://coolors.co/dcfffd-52ffee-4fb477-3f6634-345511 */