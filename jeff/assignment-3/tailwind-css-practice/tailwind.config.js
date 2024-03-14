/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
			fontWeight: {
				bold: 700,
				semibold: 600,
				regular: 500,
				medium: 400,
				light: 300,
			},
			padding: {
				1: '0.5rem',
				2: '1rem',
				3: '1.5rem',
				4: '2rem',
				5: '2.5rem',
				6: '3rem',
				7: '3.5rem',
				8: '4rem',
				9: '4.5rem',
				10: '5rem',
			},
			fontSize: {
				xl: '3.2rem',
				lg: '2.4rem',
				bg: '1.8rem',
				md: '1.5rem',
				sm: '1.3rem',
				ti: '1.1rem',
			},
			colors: {
				primary: {
					0: '#C7FF93',
					200: '#A3F05A',
					400: '#82D932',
					600: '#55AF00',
					800: '#448A02',
					1000: '#316501',
				},
				secondary: {
					0: '#FFBC8B',
					200: '#FF8F3D',
					400: '#FF6B00',
					600: '#D95B00',
					800: '#B64D00',
					1000: '#883900',
				},
				grayScale: {
					0: '#FFFFFF',
					100: '#F1F1F1',
					200: '#D8D8D8',
					400: '#A8A8A8',
					600: '#6f6f6f',
					800: '#363636',
					1000: '#000000',
				},
			},
		},
	},
}
