import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',  // Ensure this matches the output directory
  webpack: (config) => {
    // Example: Splitting vendor code into separate chunks
    config.optimization.splitChunks = {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };

    // Example: Limiting the maximum size of chunks to reduce size of 0.pack
    config.performance = {
      maxEntrypointSize: 20000,
      maxAssetSize: 20000,
    };

    return config;
  },
};

export default nextConfig;

