// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {

    domains: ['avatars.githubusercontent.com','ghchart.rshah.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
});
