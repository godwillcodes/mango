import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add images.pexels.com to the allowed image domains
  images: {
    domains: ["images.pexels.com"],
  },
  /* config options here */
};

export default nextConfig;
