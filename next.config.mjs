/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'default',
		minimumCacheTTL: 60,
		domains: ['image.tmdb.org', 'webpulse.imgsmail.ru'],
	},
}

export default nextConfig
