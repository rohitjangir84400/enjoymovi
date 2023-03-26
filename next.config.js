/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images:{
    domains:['image.tmdb.org']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
