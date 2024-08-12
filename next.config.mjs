import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: 'out',
  
  // Enable image optimization
  images: {
    domains: ['jacksonling.com'], // Add your image domains here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable gzip compression
  compress: true,

  // Configure webpack
  webpack: (config, { dev, isServer }) => {
    // Enable tree shaking
    config.optimization.usedExports = true;

    // Minify JavaScript in production
    if (!dev) {
      config.optimization.minimize = true;
    }

    return config;
  },

  // Enable SWC minification for JavaScript and CSS
  swcMinify: true,

  // Experimental features
  experimental: {
    scrollRestoration: true,
    outputStandalone: true,
  },
};

// Wrap with bundle analyzer
const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// Export the configuration
export default withBundleAnalyzerConfig(nextConfig);