/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'neon-dark': '#FF0080',
				'neon-medium-dark':  '#FF5580',
				'neon-medium-light': '#FFAA80',
				'neon-light': '#FFFF80',
			}
		},
		
	},
	plugins: [],
}
