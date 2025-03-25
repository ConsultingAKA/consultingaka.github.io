/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using a custom domain
  basePath: '',
  // Disable trailing slashes
  trailingSlash: true,
  // Disable default React strict mode for compatibility
  reactStrictMode: false,
  // Optional but can help
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
};

module.exports = nextConfig;