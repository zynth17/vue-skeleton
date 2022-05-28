module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				wave: 'wave 1.5s linear infinite',
			},
			keyframes: {
				wave: {
					'100%': { transform: 'translateX(100%) ' },
				},
			},
		},
	},
	plugins: [],
};
