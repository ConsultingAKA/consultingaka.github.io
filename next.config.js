/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using a custom domain
  basePath: '',
  // Disable trailing slashes
  trailingSlash: false,
  // Disable default React strict mode for compatibility
  reactStrictMode: false,
};

module.exports = nextConfig;