/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',  // Ensure this matches the output directory
  output: 'export' // Use the new export configuration
};

export default nextConfig;

