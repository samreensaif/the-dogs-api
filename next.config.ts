/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thedogapi.com',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
