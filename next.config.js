/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['cdn.myikas.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
