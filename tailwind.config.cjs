/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Roboto'],
			serif: ['Roboto Serif'],
		},

		container: {
			center: true,
			screens: {
                'sm': '370px',
                'md': '370px',
                'lg': '760px',
                'xl': '760px',
                '2xl': '760px',
            }
		},
	  },
	  daisyui: {
		themes: {
			mytheme: {
				"primary": "#111827",
				"base-100": "#FDFCF6",
			}
		},
	  },
	  plugins: [require("daisyui")],
}
