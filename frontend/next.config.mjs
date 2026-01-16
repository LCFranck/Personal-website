/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',      // Required for static serving
  distDir: '../backend/dist', // Tells Next to build directly into the backend folder

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
