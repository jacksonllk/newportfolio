/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',  // Ensure this matches the output directory
  images: {
    unoptimized: true,
  },
};

export default nextConfig;