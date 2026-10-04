/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      { source: "/meridian", destination: "/meridian/index.html" },
      { source: "/meridian/", destination: "/meridian/index.html" },
    ];
  },
};

export default nextConfig;
