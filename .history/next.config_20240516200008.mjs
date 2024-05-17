/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'http://localhost:3000/',
            port: '',
            pathname: '/https://cdn.myanimelist.net/**',
          },
        ],
      },
};


export default nextConfig;
