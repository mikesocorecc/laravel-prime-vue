/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/js/**/*.vue', 
    './resources/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#3b82b2',
        'primary': '#0891b2',
		'secondary-light': '#e1e5e8',
		'secondary': '#82868b',
		'info-light': '#82d3f8',
		'info': '#00cfe8',
		'dark-light': '#728394',
		'dark': '#4b4b4b',
		'success-light': '#a8f5b4',
		'success': '#28c76f',
		'danger-light': '#fd9b96',
		'danger': '#ea5455',
		'warning-light': '#ffc473',
		'warning': '#ff9f43',
		'light-light': '#e6ecf1',
		'light': '#f6f6f6',
		'ternary-light': '#f6f7f8',
      },
	  boxShadow: {
        'primary-sm': '0 8px 25px -8px #0891b2',
        'primary-lg': ' 0 0 10px 1px rgb(8 145 178 / 70%)',
        'secondary-sm': '0 8px 25px -8px #82868b',
        'info-sm': '0 8px 25px -8px #00cfe8',
        'success-sm': '0 8px 25px -8px #28c76f',
        'danger-sm': '0 8px 25px -8px #ea5455',
        'warning-sm': '0 8px 25px -8px #ff9f43',
      }
    },
  },
  plugins: [],
}
