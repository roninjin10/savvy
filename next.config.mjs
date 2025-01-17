import { WebpackPluginTevm } from '@tevm/bundler/webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.plugins.push(new WebpackPluginTevm());
    return config;
  },
};

export default nextConfig;
