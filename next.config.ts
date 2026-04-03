import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roomnine-cdn.vercel.app",
      },
    ],
  },
};

export default nextConfig;
