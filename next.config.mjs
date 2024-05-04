/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    /* АПИ не работает с оптимизированными картинками, 
    скорее всего, потому что nextjs добавляет свои теги, которые блокируются АПИ*/
    unoptimized: true,
    domains: ['image.tmdb.org'],
  },
}

export default nextConfig
