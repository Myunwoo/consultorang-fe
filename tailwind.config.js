/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        consultaurant: {
          primary: '#3D9AD6',
          secondary: '#BEE6FF',
          accent: '#1B6DA8',
          white: '#FFFFFF',
          notice: '#fef08a'
        },
      },
    },
  },
  plugins: [],
}