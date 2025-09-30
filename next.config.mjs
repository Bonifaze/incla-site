import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for cPanel hosting
  output: 'export',
  
  // Disable powered by header for security
  poweredByHeader: false,
  
  // Disable generateEtags for better caching control
  generateEtags: false,
  
  // Trailing slash for static hosting
  trailingSlash: true,
  
  // Disable server-side features for static export
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://incla.edu.ng' : '',
  
  // Base path configuration
  basePath: '',

  // Security headers (will be handled by .htaccess for static hosting)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);

// module.exports = {
//   output: 'export',
// };