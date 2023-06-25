/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        coral: {
          50: '#fff4ed',
          100: '#ffe5d4',
          200: '#ffc7a8',
          300: '#ffa071',
          400: '#ff7f50',
          500: '#fe4711',
          600: '#ef2d07',
          700: '#c61c08',
          800: '#9d190f',
          900: '#7e1810',
          950: '#440806',
        },
        mirage: {
          50: '#f4f7fb',
          100: '#e9eef5',
          200: '#cedbe9',
          300: '#a3bdd6',
          400: '#7198bf',
          500: '#4f7ba8',
          600: '#3d628c',
          700: '#324f72',
          800: '#2c4460',
          900: '#293b51',
          950: '#1e2a3b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
