/** @type {import('next').NextConfig} */
const getConfigUrlPath = () => {
	if (process.env.NEXT_VERCEL_ENV === 'PROD') {
		return 'https://si-journey-blog.vercel.app';
	}
	if (process.env.NEXT_VERCEL_ENV === 'DEV') {
		return 'https://si-journey-blog-git-develop-kj44389.vercel.app';
	}
	return 'http://localhost:3000';
};

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({
	swcMinify: true,
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io', 'images.unsplash.com'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=63072000; includeSubDomains; preload',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Permissions-Policy',
						value: `fullscreen=(self ${getConfigUrlPath()}\`), camera=(); battery=(); geolocation=(); microphone=()`,
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					// TODO: Add CSP
					// {
					// 	key: 'Content-Security-Policy',
					// 	value: `default-src 'self'; img-src 'self' https://cdn.sanity.io https://images.unsplash.com; script-src 'self' https: http:; style-src 'self' 'unsafe-inline'; font-src 'self'`,
					// },
				],
			},
		];
	},
});

module.exports = nextConfig;
