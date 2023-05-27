/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
     colors: {
      'bg-color': '#1D1E20',
        'button': '#ffcc00'
     }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
