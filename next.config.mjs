/** @type {import('next').NextConfig} */


import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundles/client.html',
        openAnalyzer: false,
      }));
    }
    return config;
  },
};

export default nextConfig;
