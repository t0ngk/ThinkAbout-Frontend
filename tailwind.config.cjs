/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				propmt: ['Prompt', 'sans-serif']
			},
			colors: {
				'primary': {
					50: '#fef2f4',
					100: '#fde6e9',
					200: '#fbd0d9',
					300: '#f7aab9',
					400: '#f27a93',
					500: '#e63f66',
					600: '#d42a5b',
					700: '#b21e4b',
					800: '#951c45',
					900: '#801b40',
					950: '#470a1f'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
