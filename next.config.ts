import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // Optional: Configure image optimization if you're using next/image
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
