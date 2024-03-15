import theme from './theme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			...theme,
		},
	},
	plugins: [],
}
