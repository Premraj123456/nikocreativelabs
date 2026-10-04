/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/meridian", destination: "/meridian/index.html" }];
  },
};

export default nextConfig;
