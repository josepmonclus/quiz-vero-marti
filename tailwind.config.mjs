/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'neon-dark': '#00224D',
				'neon-medium-dark':  '#5D0E41',
				'neon-medium-light': '#A0153E',
				'neon-light': '#FF204E',
			}
		},
		
	},
	plugins: [],
}
