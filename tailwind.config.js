/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorPortalTheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#37CDBE',
          neutral: '#3A4256',

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}