/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.output.uniqueName = 'atlas-wealth';
    return config;
  },
};

module.exports = nextConfig;
