// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };

    config.resolve.extensions.push('.js', '.mjs');

    return config;
  },
};

export default nextConfig;
