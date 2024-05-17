/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '',
          port: '',
          pathname: '/https://cdn.myanimelist.net/**',
        },
      ],
    },
  }
export default nextConfig;
