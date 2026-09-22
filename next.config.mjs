/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/funnel", destination: "/start", permanent: true },
      { source: "/funnel/salon", destination: "/salon", permanent: true },
      {
        source: "/funnel/salon/thanks",
        destination: "/salon/thanks",
        permanent: true,
      },
      { source: "/funnel/thanks", destination: "/salon/thanks", permanent: true },
      { source: "/funnel/offer", destination: "/offer", permanent: true },
    ];
  },
};

export default nextConfig;
