/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
	theme: {
		extend: {
		  fontFamily: {
			  sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
		  },
		  colors: {
			primary: {
			  indigo: '#171D44',
			  indigolight: '#1c2247',
			  orange: '#FFAC71',
			  secondary: '#8E92B2',
			},
			text: {
			  title: '#FAFAFA',
			  normal: '#cfd3e9',
			},
		  },
		},
		screens: {
		  sm: '640px',
		  // => @media (min-width: 640px) { ... }
	
		  md: '768px',
		  // => @media (min-width: 768px) { ... }
	
		  lg: '1024px',
		  // => @media (min-width: 1024px) { ... }
	
		  xl: '1280px',
		  // => @media (min-width: 1280px) { ... }
		},
		transitionProperty: {
			'width': 'width'
		},
	},
	plugins: [
		require('flowbite/plugin'),
	  ],
}
