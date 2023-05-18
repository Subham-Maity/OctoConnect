/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "ghchart.rshah.org",
      "github-readme-streak-stats.herokuapp.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
