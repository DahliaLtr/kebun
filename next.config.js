/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['www.hortusweb.com']
  }
}

module.exports = nextConfig
