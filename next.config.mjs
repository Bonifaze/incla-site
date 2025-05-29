/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  output: 'standalone',
  reactStrictMode: true
};

export default nextConfig;

// module.exports = {
//   output: 'export',
// };