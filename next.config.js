/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyjson.com/',
        port: '',
        pathname: 'data/products/**',
      },
    ],
  },
};

module.exports = nextConfig;
