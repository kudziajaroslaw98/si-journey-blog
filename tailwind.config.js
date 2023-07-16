/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: 'var(--font-inter)',
				'open-sans': 'var(--font-open-sans)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				emperor: {
					50: '#f7f7f7',
					100: '#e3e3e3',
					200: '#c8c8c8',
					300: '#a4a4a4',
					400: '#818181',
					500: '#666666',
					600: '#525252',
					700: '#434343',
					800: '#383838',
					900: '#313131',
					950: '#1a1a1a',
					1000: '#101010',
				},
				'picton-blue': {
					50: '#f2f9fd',
					100: '#e4f0fa',
					200: '#c2e2f5',
					300: '#8dcbec',
					400: '#49addf',
					500: '#2997ce',
					600: '#1a78af',
					700: '#17608d',
					800: '#175275',
					900: '#184562',
					950: '#102c41',
				},
				conifer: {
					50: '#f4fde8',
					100: '#e6facd',
					200: '#cef4a2',
					300: '#aceb6b',
					400: '#94df49',
					500: '#6ec31f',
					600: '#549b15',
					700: '#407615',
					800: '#355e16',
					900: '#2f5017',
					950: '#162c07',
				},
			},
			keyframes: {
				bounceHorizontal: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(20%)' },
				},
				slideInFromBottom: {
					'0%': { transform: 'translateY(100%)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				},
				slideOutToBottom: {
					'0%': { transform: 'translateY(0)', opacity: 1 },
					'100%': { transform: 'translateY(100%)', opacity: 0 },
				},
				// slideInFromRight: {
				// 	'0%': { transform: 'translateX(100%)', opacity: 0 },
				// 	'100%': { transform: 'translateX(0)', opacity: 1 },
				// },
				// slideOutToRight: {
				// 	'0%': { transform: 'translateX(0)', opacity: 1 },
				// 	'100%': { transform: 'translateX(100%)', opacity: 0 },
				// },
				popIn: {
					'0%': { transform: 'scale(0.7)', opacity: 0 },
					'100%': { transform: 'scale(1)', opacity: 1 },
				},
				popOut: {
					'0%': { transform: 'scale(1)', opacity: 1 },
					'100%': { transform: 'scale(0.7)', opacity: 0 },
				},
			},
			animation: {
				'bounce-horizontal': 'bounceHorizontal 3s ease-in-out infinite',
				'slide-in-from-bottom': 'slideInFromBottom .3s ease-out forwards',
				'slide-out-to-bottom': 'slideOutToBottom .3s ease-out forwards',
				'pop-in': 'popIn .2s ease-in-out forwards',
				'pop-out': 'popOut .2s ease-in-out forwards',
			},
		},
	},
	mode: process.env.NODE_ENV ? 'jit' : undefined,
};
