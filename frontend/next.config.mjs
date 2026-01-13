/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'external.api.yle.fi',
        pathname: '/v1/teletext/images/**',
      },
    ],
  },

};

export default nextConfig;
