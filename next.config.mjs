/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		loader: 'default',
		minimumCacheTTL: 60,
		domains: ['image.tmdb.org', 'webpulse.imgsmail.ru'],
	},
}

export default nextConfig
