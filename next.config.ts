import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },

      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
};
export default nextConfig;
